---
title: nhanderekoa
slug: nhanderekoa
pageSettings:
  language: pt-BR
  link_pt_br: nhanderekoa
  link_en: nhanderekoa-en
  link_es: nhanderekoa-es
  animations: enable_all
  direction: left
  seoTitle: ''
  seoDescription: ''
  seoKeywords: []
  seoImage: ''
pageTheme:
  primaryColor: '#000000'
  secondaryColor: '#14882a'
  highlightColor: '#ffffff'
  auxiliaryColor: '#484848'
  displayFont: ''
  textFont: ''
  spacingPatterns:
    - name: Padrão
      mobile: '10'
      tablet: '11'
      desktop: '12'
mapbox:
  type: MapBox
  style: mapbox://styles/studio-autonoma/cmdgctyq702ww01s4dyd42dyc
  token: pk.eyJ1Ijoic3R1ZGlvLWF1dG9ub21hIiwiYSI6ImNtY3V2d3dtMTA0ZXgycnB4OW01cjlqb2QifQ.3NMaRt1maLlqTv6nlVqVHA
  centerLng: '-33.0152'
  centerLat: '-33.0152'
  zoom: '2.5'
  bearing: '0'
  pitch: '0'
  layers: satelite
  columnAlign: left
  floatingText: true
  views:
    - id: resistencia_intro
      centerLng: '-23.459'
      centerLat: '-23.459'
      zoom: '12.6'
      mobileZoom: '12.6'
      duration: '3000'
      bearing: '0'
      pitch: '0'
      layers: |-
        ti-jaragua-aldeias
        ti-jaragua-recorte
        satelite
      title: ''
      notes: ''
      items:
        - icon: aldeias
          colorIcon: '#2ed650ff'
          typeIcon: rounded
          text: aldeias
components:
  - type: Group
    id: home
    shortTitle: home
    longTitle: home
    description: título e resumo
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/imagem_01_pico.jpg
    overlay: ''
    components: []
  - type: Group
    id: parte 2 - titulo
    shortTitle: parte 2 - titulo
    longTitle: 'parte 2: Da Invasão ao Parque'
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/imagem_02_pateodocolegio.jpg
    overlay: light
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Text
              hasDropCap: false
              content: |-
                ###### parte II

                ## Da Invasão ao Parque: a colonização do Jaraguá

                ## (1554 – 1960)
        column2:
          components: []
  - type: Group
    id: parte 2 - texto
    shortTitle: parte 2 - texto
    longTitle: parte 2 - texto
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Columns
        paddingTop: false
        paddingBottom: false
        components:
          - type: Text
            hasDropCap: true
            content: |-
              Como mostra o Mapa Etno-Histórico de Curt Nimuendajú (1944), o território ancestral Guarani se estende desde a fronteira do estado do Paraná com o Paraguai, a Argentina e a Bolívia, até o Espírito Santo, passando por Mato Grosso do Sul, São Paulo e Rio de Janeiro. Os ancestrais Guarani caminhavam, e os Guarani de hoje seguem caminhando, por todo este território, que chamam de Yvyrupa, “o leito da terra”.	

              ![img curt](/uploads/arqueological-remains_07.jpg "Recorte do mapa Ethno Histórico desenhado por Curt Nimuendaju em 1944")

              Com a invasão Europeia, assim como aconteceu em outros territórios indígenas, os territórios Guarani foram brutalmente reconfigurados por deslocamentos forçados e extermínios. 

              Em São Paulo, após a criação do aldeamento do Pateo do Collegio em 1554, as populações tupi-guarani que habitavam a região foram submetidas a sistemáticas políticas de confinamento e escravização. 

              Marco fundante da cidade, o Pateo do Collegio irradiou a colonização sobre o Jaraguá, uma das primeiras regiões onde os Europeus exploraram ouro no Brasil Colônia. O Jaraguá passa então a ser alvo da exploração de bandeirantes, e assim é continuamente despovoado de seus habitantes nativos.
        invertOnMobile: false
        columnsAlign: 66-33
        column1:
          components:
            - type: Text
              hasDropCap: true
              content: Como mostra o Mapa Etno-Histórico de Curt Nimuendajú (1944), o território ancestral Guarani se estende desde a fronteira do estado do Paraná com o Paraguai, a Argentina e a Bolívia, até o Espírito Santo, passando por Mato Grosso do Sul, São Paulo e Rio de Janeiro. Os ancestrais Guarani caminhavam, e os Guarani de hoje seguem caminhando, por todo este território, que chamam de Yvyrupa, “o leito da terra”.**&#160;&#160;**
            - type: ImageBlock
              wideImage: false
              src: /uploads/imagem_03_mapacurt.png
              alt: mapa curt
              description: recorte do Mapa Etno-Histórico de Curt Nimuendajú (1944), mostrando a amplitude to território Guarani.
            - type: Text
              hasDropCap: true
              content: |-
                Com a invasão Europeia, assim como aconteceu em outros territórios indígenas, os territórios Guarani foram brutalmente reconfigurados por deslocamentos forçados e extermínios. 

                Em São Paulo, após a criação do aldeamento do Pateo do Collegio em 1554, as populações tupi-guarani que habitavam a região foram submetidas a sistemáticas políticas de confinamento e escravização.  

                Marco fundante da cidade, o Pateo do Collegio irradiou a colonização sobre o Jaraguá, uma das primeiras regiões onde os Europeus exploraram ouro no Brasil Colônia. O Jaraguá passa então a ser alvo da exploração de bandeirantes, e assim é continuamente despovoado de seus habitantes nativos.
        column2:
          components:
            - type: Spacer
              desktop: 700px
              tablet: 700px
              mobile: 700px
            - type: ImageBlock
              wideImage: true
              src: /uploads/imagem_02_pateodocolegio.jpg
              alt: ''
              description: Pateo do Colégio pintado por Jean-Baptiste Debret em 1827, quando servia como Palácio do Governo de São Paulo
  - type: Map
    id: mapa 1 - colonizacao
    shortTitle: mapa 1 - colonizacao
    longTitle: mapa 1 - colonizacao
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    bgColor: Secundary
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: resistencia_intro
      - type: Spacer
        desktop: 600px
        tablet: 600px
        mobile: 600px
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: resistencia_intro_map
    columnAlign: right
    floatingText: false
  - type: Group
    id: parte 2 - texto 2
    shortTitle: parte 2 - texto 2
    longTitle: parte 2 - texto 2
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: false
        paddingBottom: false
        components:
          - type: Text
            hasDropCap: false
            content: |-
              Com a exaustão do ouro em São Paulo e a descoberta das minas em Goiás e Minas Gerais, a área do Pico do Jaraguá transforma-se numa enorme propriedade agrícola.  

              Durante o século XIX, seguindo a expansão da economia cafeeira paulista, a chamada “Fazenda Jaraguá” torna-se uma grande produtora de café, e vastas áreas de Mata Atlântica são arrasadas. 

              Espécies de café remanescentes destas plantações são encontradas até hoje por toda a Terra Indígena Jaraguá.
---

