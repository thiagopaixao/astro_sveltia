---
title: Jaraguá
slug: jaragua
pageSettings:
  language: pt-BR
  link_pt_br: /jaragua-pt
  link_en: /jaragua-en
  link_es: /jaragua-es
  animations: enable_all
  direction: left
  seoTitle: ''
  seoDescription: ''
  seoKeywords: []
  seoImage: ''
pageTheme:
  primaryColor: '#5e5e5e'
  secondaryColor: '#ffffff'
  highlightColor: '#000000'
  auxiliaryColor: '#1b311d'
  displayFont: ''
  textFont: ''
  spacingPatterns:
    - name: Padrão
      mobile: '10'
      tablet: '10'
      desktop: '10'
mapbox:
  type: MapBox
  style: mapbox://styles/studio-autonoma/cmd3dacbf00f201qn33dpbfwn
  token: pk.eyJ1Ijoic3R1ZGlvLWF1dG9ub21hIiwiYSI6ImNtY3V2d3dtMTA0ZXgycnB4OW01cjlqb2QifQ.3NMaRt1maLlqTv6nlVqVHA
  centerLng: '-33.015'
  centerLat: '-11.622'
  zoom: '2.5'
  bearing: '0'
  pitch: '0'
  layers: ''
  columnAlign: center
  floatingText: false
  views:
    - id: map1_view1
      centerLng: '-46.763'
      centerLat: '-23.459'
      zoom: '12.6'
      mobileZoom: '12.6'
      duration: '2000'
      bearing: '0'
      pitch: '0'
      layers: |-
        ti-jaragua-demarcacao
        ti-jaragua-aldeias
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: circle
          colorIcon: '#976c20ff'
          typeIcon: outlined
          text: Aldeias
        - icon: show_chart
          colorIcon: '#597d5dff'
          typeIcon: outlined
          text: Terra indígena demarcada
    - id: map1_view2
      centerLng: '-46.748'
      centerLat: '-23.468'
      zoom: '14'
      mobileZoom: '14'
      duration: '4000'
      bearing: '0'
      pitch: '0'
      layers: |-
        manifestacoes-guarani-linhas
        ti-jaragua-demarcacao
        ti-jaragua-aldeias
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: show_chart
          colorIcon: '#24e037ff'
          typeIcon: outlined
          text: Caminho percorrido
components:
  - type: Group
    id: Teste
    shortTitle: Teste
    longTitle: ''
    description: ''
    showInMenu: false
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: ColumnSticky
        txtColor: ''
        bgColor: ''
        paddingTop: false
        paddingBottom: false
        layout: text-bigger
        title: Título
        components: []
  - type: Map
    id: manifestações guarani_map 1_intro
    shortTitle: manifestações guarani_map 1_intro
    longTitle: Manifestações Guarani
    description: ''
    showInMenu: false
    animations: true
    txtColor: Secondary
    bgColor: Highlight
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view1
    columnAlign: center
    floatingText: true
  - type: Map
    id: manifestações guarani_map 1
    shortTitle: manifestações guarani_map 1
    longTitle: ''
    description: ''
    showInMenu: false
    animations: true
    txtColor: Secondary
    bgColor: Highlight
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view2
      - type: Timeline
        components:
          - type: TimelineBullet
            content: |-
              Local: Altura km 21 bandeirantes

              Fechamento de uma das pistas da rodovia dos Bandeirantes, na entrada de SP. Reivindicando o arquivamento da PEC n.o 215 e do PLP n.o 227. Publicação da portaria declaratória das atuais TI Jaraguá e Tenondé Porã. Fim dos processos judiciais movidos pelo Governo do Estado em relação às sobreposições das TI e dos parques estaduais.
            text: 26/09/2023
      - type: VideoEmbed
        wideVideo: false
        videoUrl: https://www.youtube.com/embed/JCBOU4wQmR8?si=tfTqzA777ZSeDuKX
        videoCaption: 'fonte: Comissão Guarani Yvyrupa'
      - type: Spacer
        desktop: 600px
        tablet: 600px
        mobile: 600px
    columnAlign: right
    floatingText: false
---

