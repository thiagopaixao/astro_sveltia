# 🚀 Deploy Astro com GitHub Actions  
**GitHub Pages + Servidor Linux (SSH/rsync) com backups seguros**

Este projeto fornece **dois workflows prontos** para publicar um site Astro de forma confiável:
- **GitHub Pages** → ideal para hosting estático no GitHub, com pré-checagem automática.
- **Servidor Linux (SSH/rsync)** → deploy via SSH com **backup diário seguro**, preservação opcional de pastas e validações contra erros comuns.

> Você pode manter **os dois ativos ao mesmo tempo**. Cada um só executa se os pré-requisitos forem atendidos (pré-checks).

---

## 📚 Sumário
- [Arquivos e estrutura](#-arquivos-e-estrutura)
- [Como funciona — visão geral](#-como-funciona--visão-geral)
- [Fluxo de alto nível](#-fluxo-de-alto-nível)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração rápida (passo a passo)](#-configuração-rápida-passo-a-passo)
  - [1) Secrets e scripts de automação](#1-secrets-e-scripts-de-automação)
  - [2) GitHub Pages](#2-github-pages)
  - [3) Servidor Linux (SSH/rsync)](#3-servidor-linux-sshrsync)
- [Detalhes dos workflows](#-detalhes-dos-workflows)
  - [GitHub Pages — `.github/workflows/deploy-pages.yml`](#github-pages--githubworkflowsdeploy-pagesyml)
  - [Servidor Linux — `.github/workflows/deploy-server.yml`](#servidor-linux--githubworkflowsdeploy-serveryml)
- [Backups, restauração e limpeza](#-backups-restauração-e-limpeza)
- [Segurança: boas práticas](#-segurança-boas-práticas)
- [Diagnóstico e troubleshooting](#-diagnóstico-e-troubleshooting)
- [Customizações comuns](#-customizações-comuns)
- [Apêndice A — Geração/uso de chaves SSH](#apêndice-a--geraçãouso-de-chaves-ssh)
- [Apêndice B — Tabela de secrets](#apêndice-b--tabela-de-secrets)
- [Licença](#-licença)

---

## 🗂️ Arquivos e estrutura

```
.github/workflows/deploy-pages.yml     # Workflow: GitHub Pages (pré-check + build + publish)
.github/workflows/deploy-server.yml    # Workflow: Servidor Linux (pré-check + backup + rsync + chown opcional)
.github/secrets.example.env            # Template de secrets para facilitar preenchimento
scripts/setup-secrets.sh               # Bash: sobe secrets do .env via GitHub CLI
scripts/setup-secrets.ps1              # PowerShell: idem
```

---

## 🧠 Como funciona — visão geral

### GitHub Pages
- Disparo: `push` em `main` e `workflow_dispatch` (manual).
- Pré-check: verifica via API se o Pages está habilitado no repo; se **não** estiver, emite aviso e **pula** o deploy.
- Build: usa `SITE` e `BASE_PATH` dinâmicos (compatível com Astro).
- Deploy: publica artefato com `actions/deploy-pages@v4` (ambiente `github-pages`).

### Servidor Linux (SSH/rsync)
- Disparo: `push` em `main` (produção) e `preview` (staging), e `workflow_dispatch` (manual).
- Pré-check: valida secrets obrigatórios; normaliza e valida chave privada (CRLF→LF + `\n` final); testa SSH com `IdentitiesOnly=yes` e host estrito.
- Build (Astro): `SITE` por branch (`SITE_URL_MAIN` / `SITE_URL_PREVIEW`), `BASE_PATH=/`.
- **Backup seguro** (antes do deploy):  
  - `DOCROOT` → `BACKUPS_DIR/<basename(docroot)>_YYYY-MM-DD` no servidor.
  - Recusa `DOCROOT` vazio, não-absoluto ou `/`; bloqueia destino **dentro** do docroot; `--one-file-system`.
- Deploy: `rsync` com `--delete` e `--chmod` (dirs 755 / files 644).  
  - Na `main`, preserva subpastas listadas em `EXCLUDE_PATHS` (CSV).  
  - Na `preview`, sem preservação.
- Permissões (opcional): `chown -R owner:group` quando `DEPLOY_OWNER` e `DEPLOY_GROUP` existirem.

> ⚙️ **Robustez**: Se o output do docroot não chegar ao job de deploy, um passo **recalcula** pelo branch usando os secrets. Se continuar vazio, o job **falha com erro claro** (evita escrever em `/`).

---

## 🧭 Fluxo de alto nível

```
push → (main|preview)

┌──────────────────────────────┐
│ precheck: secrets + ssh ok? │──no──► aviso/skip
└──────────────┬───────────────┘
               │yes
               ▼
         build (Astro)
               ▼
        backup (servidor)
               ▼
    rsync dist/ → docroot
               ▼
   (opcional) chown destino
```

---

## ✅ Pré-requisitos

- Node.js 20 (para build do Astro no runner).
- Permissões de escrita no servidor para o usuário de deploy.
- (Recomendado) GitHub CLI (`gh`) local para subir secrets a partir de arquivos.

---

## ⚡ Configuração rápida (passo a passo)

### 1) Secrets e scripts de automação
1. Copie o template e edite:
   ```bash
   mkdir -p .github scripts
   cp .github/secrets.example.env .github/secrets.env
   # Edite .github/secrets.env com seus valores
   ```
2. GitHub CLI e login:
   ```bash
   gh --version
   gh auth login
   ```
3. Suba os secrets (escolha seu ambiente):
   - **Bash/macOS/Linux**  
     ```bash
     bash scripts/setup-secrets.sh
     # Environment secrets (ex.: production)
     ENVIRONMENT=production bash scripts/setup-secrets.sh
     ```
   - **Windows (PowerShell)**  
     ```powershell
     pwsh scripts/setup-secrets.ps1
     # Environment secrets
     $env:ENVIRONMENT = "production"; pwsh scripts/setup-secrets.ps1
     ```

> Os scripts gerenciam valores **multilinha** (ex.: chave privada) a partir de **arquivos**, evitando problemas de CRLF e quebras de linha.

### 2) GitHub Pages
- Vá em **Settings → Pages** e defina **Build and deployment → Source = GitHub Actions**.  
- O workflow faz um **pré-check**: se o Pages não estiver habilitado, ele **avisa e encerra**.

### 3) Servidor Linux (SSH/rsync)
- Crie um **usuário de deploy** com acesso ao(s) docroot(s):  
  `DEPLOY_MAIN_DOCROOT_PATH` e `DEPLOY_PREVIEW_DOCROOT_PATH` (ambos caminhos **absolutos**).
- Autorize a **chave pública** (ver [Apêndice A](#apêndice-a--geraçãouso-de-chaves-ssh)) no `~/.ssh/authorized_keys` do usuário de deploy.
- (Opcional) Preencha `SSH_KNOWN_HOSTS` com `ssh-keyscan` do host.

---

## 🔍 Detalhes dos workflows

### GitHub Pages — `.github/workflows/deploy-pages.yml`
- **Triggers:** `push` em `main` e `workflow_dispatch`.
- **Pré-check Pages:** consulta `repos/{owner}/{repo}/pages` via `gh api`; se não habilitado → aviso + `skip`.
- **Build (Astro):**
  - `SITE = https://<owner>.github.io`
  - `BASE_PATH = /<repo>/`
- **Deploy:** `actions/configure-pages@v5` + `actions/deploy-pages@v4`.

### Servidor Linux — `.github/workflows/deploy-server.yml`
- **Triggers:** `push` em `main` e `preview` + `workflow_dispatch`.
- **Pré-check:** valida secrets → normaliza/valida chave → testa SSH (estrito e `IdentitiesOnly=yes`).
- **Build (Astro):**
  - `SITE` por branch: `SITE_URL_MAIN` (main) ou `SITE_URL_PREVIEW` (preview).
  - `BASE_PATH=/`.
- **Backup seguro:**
  - Regras de segurança: recusa `DOCROOT` vazio, não-absoluto ou `/`; destino não pode estar **dentro** do docroot; `--one-file-system`.
- **Deploy (rsync):**
  - `--delete` + `--chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r` (dirs 755 / files 644).
  - `EXCLUDE_PATHS` (CSV) só na **main** (ex.: `beta, v1`).
- **Chown (opcional):** se `DEPLOY_OWNER` e `DEPLOY_GROUP` existirem.

> **Fallback do docroot:** mesmo que o output entre jobs falhe, um passo recalcula `deploy_target` pelo branch e secrets. Se vazio, aborta com mensagem clara (evita `mkdir ''` e `rsync` perigosos).

---

## 🛟 Backups, restauração e limpeza

- Local do backup (servidor):  
  `BACKUPS_DIR_PATH/<basename(docroot)>_YYYY-MM-DD`
- **Restauração (dry-run):**
  ```bash
  DOCROOT=/caminho/do/docroot
  BACKUP=/caminho/backups/public_html_YYYY-MM-DD

  rsync -aHAX --delete -n "$BACKUP/" "$DOCROOT/"
  # Restauração real:
  # rsync -aHAX --delete "$BACKUP/" "$DOCROOT/"
  ```
- **Limpeza (ex.: > 14 dias):**
  ```bash
  BACKUPS_DIR="/caminho/backups"
  find "$BACKUPS_DIR" -maxdepth 1 -type d -name 'public_html_*' -mtime +14 -exec rm -rf -- {} +
  ```

> A rotina de backup **nunca apaga a fonte** (docroot). O `--delete` remove **somente no destino** (pasta de backup) arquivos que não existam mais na fonte.  
> O deploy, por sua vez, usa `--delete` no docroot **de destino** para refletir o conteúdo do `dist/` (com preservações configuráveis via `EXCLUDE_PATHS` somente na `main`).

---

## 🔒 Segurança: boas práticas
- Usuário de deploy **dedicado** e com escopo mínimo.
- `SSH_KNOWN_HOSTS` preenchido (evita MITM e prompts).
- Chaves **OpenSSH/ed25519 sem passphrase** para CI. (Para chaves com passphrase, seria preciso lógica adicional.)
- `IdentitiesOnly=yes` em todos os comandos SSH e rsync (garante uso exclusivo da chave do secret).
- Nunca comitar `.github/secrets.env` preenchido — use apenas o `.example`.

---

## 🧩 Diagnóstico e troubleshooting

**Erros comuns e soluções rápidas**

- `Invalid SSH_PRIVATE_KEY (format or passphrase)`  
  → Chave não-OpenSSH, CRLF, ausência de `\n` final, ou passphrase. Os workflows já normalizam CRLF e `\n`. Prefira subir via CLI:  
  `gh secret set SSH_PRIVATE_KEY < ~/.ssh/id_ed25519`

- `mkdir: cannot create directory ''`  
  → `deploy_target` vazio. O workflow agora resolve com **fallback** e falha com erro explícito se continuar vazio. Verifique os secrets `DEPLOY_*_DOCROOT_PATH`.

- Crescimento anormal do backup / disco cheio  
  → Versões anteriores podiam gerar loop se o destino ficasse **dentro** do docroot. A versão atual **bloqueia** isso por validação.

- Quero ver o que o workflow calculou  
  → Adicione um passo de debug após a seleção de variáveis:
  ```yaml
  - name: "Debug outputs"
    run: |
      echo "::notice title=SITE::${{ steps.vars.outputs.site }}"
      echo "::notice title=DEPLOY_TARGET::${{ steps.vars.outputs.deploy_target }}"
      echo "::notice title=IS_MAIN::${{ steps.vars.outputs.is_main }}"
  ```

---

## 🛠️ Customizações comuns

- **Branches de preview**: troque o gatilho do server para `branches: ['**']` e mantenha a decisão por branch dentro do passo de seleção.
- **Docroot único**: remova a lógica por branch e use um único secret (ex.: `DOCROOT_PATH`).  
- **Ambientes GitHub (production/staging)**: substitua os *repository secrets* por *environment secrets* e use `environment:` no job ou `ENVIRONMENT=...` nos scripts.

---

## 📎 Apêndice A — Geração/uso de chaves SSH

### Gerar chave (ed25519, sem passphrase)
```bash
ssh-keygen -t ed25519 -C "actions-deploy" -f ~/.ssh/id_ed25519
```

### Autorizar no servidor
```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
cat ~/id_ed25519.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### known_hosts
```bash
ssh-keyscan -p 22 server.exemplo.com > ~/.ssh/known_hosts_deploy
```

### Selecionar chave na linha de comando
```bash
ssh -i ~/.ssh/id_ed25519 usuario@server.exemplo.com
rsync -az -e "ssh -i ~/.ssh/id_ed25519 -p 22" ./dist/ usuario@server.exemplo.com:/var/www/site/
```

---

## 📑 Apêndice B — Tabela de secrets

### Servidor (obrigatórios)
| Secret | Exemplo | Descrição |
|---|---|---|
| `SSH_HOST` | `server.exemplo.com` | Host/IP do servidor |
| `SSH_USER` | `deployer` | Usuário de deploy |
| `SSH_PRIVATE_KEY` | *(conteúdo do arquivo)* | Chave **OpenSSH**, sem passphrase |
| `SITE_URL_MAIN` | `https://documental.xyz` | URL do site (produção) |
| `SITE_URL_PREVIEW` | `https://beta.documental.xyz` | URL do site (preview) |
| `DEPLOY_MAIN_DOCROOT_PATH` | `/home/user/domains/documental.xyz/public_html` | Docroot produção (absoluto) |
| `DEPLOY_PREVIEW_DOCROOT_PATH` | `/home/user/domains/documental.xyz/public_html/beta` | Docroot preview (absoluto) |
| `BACKUPS_DIR_PATH` | `/home/user/domains/documental.xyz/backups` | Pasta dos backups |

### Servidor (opcionais)
| Secret | Exemplo | Descrição |
|---|---|---|
| `SSH_PORT` | `22` | Porta SSH |
| `SSH_KNOWN_HOSTS` | *(saída do ssh-keyscan)* | Pino do host; se vazio, será gerado |
| `EXCLUDE_PATHS` | `beta, v1` | CSV de subpastas a preservar (só **main**) |
| `DEPLOY_OWNER` | `www-data` | Dono para `chown` |
| `DEPLOY_GROUP` | `www-data` | Grupo para `chown` |

### GitHub Pages (sem secrets)
- `SITE = https://<owner>.github.io`
- `BASE_PATH = /<repo>/`

---

## 📜 Licença
Este material é fornecido como exemplo de CI/CD. Adapte às suas políticas internas de segurança e operação.
