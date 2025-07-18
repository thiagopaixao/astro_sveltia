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
  auxiliaryColor: '#376d3b'
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
  centerLng: '-33.0152'
  centerLat: '-11.622'
  zoom: '2.5'
  bearing: '0'
  pitch: '0'
  layers: mapbox-satellite
  columnAlign: center
  floatingText: false
  views:
    - id: resistencia_intro
      centerLng: '-46.763'
      centerLat: '-23.459'
      zoom: '12.6'
      mobileZoom: '12.6'
      duration: '3000'
      bearing: '0'
      pitch: '0'
      layers: |-
        ti-jaragua-aldeias
        ti-jaragua-recorte
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: circle
          colorIcon: '#976c20ff'
          typeIcon: outlined
          text: Aldeias
        - icon: square
          colorIcon: '#597d5dff'
          typeIcon: outlined
          text: Terra indígena demarcada
    - id: resistencia_2013-26-09
      centerLng: '-46.752'
      centerLat: '-23.460'
      zoom: '14.60'
      mobileZoom: '14.60'
      duration: '4000'
      bearing: '0'
      pitch: '0'
      layers: |-
        resistencia-pontos[Nome==2013-26-09]
        ti-jaragua-aldeias
        ti-jaragua-recorte
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: circle
          colorIcon: '#24e037ff'
          typeIcon: outlined
          text: Local do protesto
    - id: resistencia_2013-01-10-pt1
      centerLng: '-46.655'
      centerLat: '-23.571'
      zoom: '14.13'
      mobileZoom: '14.13'
      duration: '4000'
      bearing: '0'
      pitch: '0'
      layers: |-
        resistencia-linhas[Nome==2013-01-10-pt1]
        ti-jaragua-aldeias
        ti-jaragua-recorte
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: show_chart
          colorIcon: '#24e037ff'
          typeIcon: outlined
          text: Caminho percorrido
    - id: resistencia_2013-01-10-pt2
      centerLng: '-46.661'
      centerLat: '-23.580'
      zoom: '16'
      mobileZoom: '16'
      duration: '4000'
      bearing: '0'
      pitch: '0'
      layers: |-
        resistencia-linhas[Nome==2013-01-10-pt1]
        resistencia-poligonos[Nome==2013-01-10-pt2]
        ti-jaragua-aldeias
        ti-jaragua-recorte
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: circle
          colorIcon: '#36f924ff'
          typeIcon: outlined
          text: Ocupação no Monumento às Bandeiras
    - id: resistencia_2014-16-04
      centerLng: '-46.633'
      centerLat: '-23.548'
      zoom: '16.40'
      mobileZoom: '16.40'
      duration: '4000'
      bearing: '0'
      pitch: '0'
      layers: |-
        resistencia-poligonos[Nome==2014-16-04]
        ti-jaragua-aldeias
        ti-jaragua-recorte
        mapbox-satellite
      title: ''
      notes: ''
      items:
        - icon: square
          colorIcon: '#36f924ff'
          typeIcon: outlined
          text: Ato no Pátio do Colégio
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
      - type: Spacer
        desktop: 800px
        tablet: 800px
        mobile: 800px
  - type: Map
    id: resistencia_map_intro
    shortTitle: resistencia_map_intro
    longTitle: Resistência
    description: ''
    showInMenu: false
    animations: true
    txtColor: Secondary
    bgColor: Highlight
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: resistencia_intro
      - type: Spacer
        desktop: 600px
        tablet: 600px
        mobile: 600px
    columnAlign: center
    floatingText: true
  - type: Map
    id: resistencia_map
    shortTitle: resistencia_map
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
        mapView: resistencia_2013-26-09
      - type: Timeline
        components:
          - type: TimelineBullet
            content: |-
              26 de setembro: em protesto contra a Proposta de Emenda a Constituição 215/2000, que visava transferir do Poder Executivo para o Congresso Nacional a competência para a demarcação de terras indígenas e quilombolas, ativistas Guarani bloqueiam a Rodovia dos Bandeirantes. O protesto também pede a demarcação das T.I.s Jaraguá e Tenondé Porã.

              Local: Altura km 21 bandeirantes
            text: 26/09/2013
      - type: VideoEmbed
        wideVideo: false
        videoUrl: https://www.youtube.com/embed/JCBOU4wQmR8?si=tfTqzA777ZSeDuKX
        videoCaption: 'Fonte: Comissão Guarani Yvyrupa'
      - type: Spacer
        desktop: 600px
        tablet: 600px
        mobile: 600px
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: resistencia_2013-01-10-pt1
      - type: Timeline
        components:
          - type: TimelineBullet
            content: |-
              01 de outubro: em uma caminhada da Avenida Paulista até o Monumento às Bandeiras, ativistas Guarani realizam “Ato de Defesa dos Direitos Indígenas e da Constituição Federal” contra a PEC 215

              Local/Trajeto: Avenida Paulista na altura do MASP, rumo ao Monumento às Bandeiras
            text: 01/10/2013
      - type: Spacer
        desktop: 500px
        tablet: 500px
        mobile: 500px
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: resistencia_2013-01-10-pt2
      - type: Spacer
        desktop: 600px
        tablet: 600px
        mobile: 600px
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: resistencia_2014-16-04
      - type: Timeline
        components:
          - type: TimelineBullet
            content: |-
              16 de abril:**&#32;**lançamento da campanha “Resistência Guarani SP” com ato no Pateo do Colégio e ocupação do Museu Anchieta

              Local: Pátio do Colégio
            text: 16/04/2014
      - type: Spacer
        desktop: 600px
        tablet: 600px
        mobile: 600px
    columnAlign: right
    floatingText: false
---

