---
title: Home
MapBox:
  columnAlign: ""
  floatingText: false
  style: mapbox://styles/comborari/ckr4wi3k80fpl17qo34th6kk2
  center:
    - lng: -54
      lat: 2
  zoom: 2
  bearing: 0
  pitch: 0
  token: pk.eyJ1IjoiY29tYm9yYXJpIiwiYSI6ImNrcjR3OWczMjBhaWEyeHIyaWhwMnUzNHcifQ.Yv7o7kj1ImyC9Rn-egF0TQ
  views:
    - id: view_1
      center:
        - lng: -54
          lat: -2
      duration: 4000
      zoom: 8
      bearing: 0
      pitch: 0
      layers:
        - '"municipios"'
        - '"amazonas"'
        - '"foztapajos"'
      mobile: null
      captions: null
  mapView: ""
sections:
  - section: Introdução
    components:
      - type: Group
        layout: default
        txtColor: "#e3e3e3ff"
        bgColor: "#9c5492ff"
        backgroundImage: /uploads/group-bg.png
        overlay: ""
        components:
          - type: ColumnSticky
            txtColor: ""
            bgColor: ""
            paddingTop: true
            paddingBottom: true
            layout: text-bigger
            title: ALTER DO CHÃO ALSO NEEDS TO BE RECOGNIZED
            components:
              - type: Text
                txtColor: "#000000ff"
                bgColor: ""
                content: "**Sed ut perspiciatis unde omnis iste natus error** sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              - type: ImageBlock
                wideImage: false
                src: /uploads/map.png
                alt: Mapa
                description: MapMundi
            body: ""
          - type: ImageBlock
            wideImage: false
            src: /uploads/map.png
            alt: Map
            description: Map
  - section: CTAs
    components:
      - type: Cta
        layout: media
        txtColor: "#ffff00ff"
        bgColor: "#808080ff"
        mediaType: image
        media: /uploads/group-bg.png
        ctaText: |-
          ### Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        highlightedText: ""
        link:
          url: "#"
          target: _self
          text: Saiba mais
      - type: Cta
        layout: text
        txtColor: "#ffff00ff"
        bgColor: "#808080ff"
        imgBg: /uploads/group-bg.png
        ctaText: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        highlightedText: Alter do Chão Also Needs to Be Recognized
        link:
          url: "#"
          target: _self
          text: Botão
  - section: CardsCall
    components:
      - type: Group
        layout: default
        txtColor: ""
        bgColor: ""
        components:
          - type: CardsCall
            cardsCallArr:
              - link:
                  url: https://google.com
                  target: _blank
                  customTarget: ""
                img:
                  src: /uploads/map.png
                  alt: Google
                title: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                text: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
              - link:
                  url: "#"
                  customTarget: ""
                img:
                  src: /uploads/thumb.png
                  alt: ""
                title: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                text: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
              - link:
                  url: "#"
                  customTarget: ""
                img:
                  src: /uploads/thumb.png
                title: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                text: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
  - section: Apoio
    components:
      - type: Group
        layout: default
        txtColor: "#f0ead9ff"
        bgColor: "#006949ff"
        backgroundImage: /uploads/group-bg.png
        overlay: dark
        components:
          - type: Column
            paddingTop: false
            paddingBottom: false
            components:
              - type: LogosGroup
                logos:
                  - image: /uploads/logo-1.jpg
                    link:
                      url: "#"
                      target: ""
                      customTarget: ""
                      title: Autonoma
                  - image: /uploads/logo-2.png
                    link:
                      url: "#"
                      target: ""
                      customTarget: ""
                      title: Lavits
                  - image: /uploads/logo-3.png
                    link:
                      url: "#"
                      target: ""
                      customTarget: ""
                      title: Ford Foundation
              - type: ChartBar
                chartTitle: Sed ut perspiciatis unde omnis iste natus
                chartNotes: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                chartBars:
                  - label: "2016"
                    color: "#c34141ff"
                    number: 229
                    numberPercent: 45.1171875
                  - label: "2015"
                    color: "#c34141ff"
                    number: 511
                    numberPercent: 100
                  - label: "2017"
                    color: "#c34141ff"
                    number: 342
                    numberPercent: 66.796875
              - type: VideoEmbed
                wideVideo: true
                videoUrl: https://www.youtube.com/embed/TcJUSMiKQyY?si=hke7RMtO71mJ9wif
                videoCaption: Quis do consequat sint commodo excepteur elit mollit officia sint sunt
              - type: Text
                txtColor: ""
                bgColor: ""
                content: |-
                  ## Et voluptate dolor quis qui eiusmod fugiat in Lorem exercitation consequat ex labore quis laboris

                  Soluptate est labore sit tempor exercitation nisi eiusmod pariatur magna est aliqua. Magna laborum elit mollit ea occaecat incididunt Lorem Lorem incididunt nisi esse fugiat anim citation. Mollit velit laboris adipisicing enim ad eiusmod deserunt veniam nulla adipisicing amet pariatur nostrud exercitation. Velit laborum occaecat nulla ex nulla esse aborum ex duis duis magna. Ipsum laboris commodo do do eiusmod. Consectetur culpa fugiat ccaecat enim ullamco tempor amet velit duis culpa commodo dolor minim. Ea sunt culpa id ea amet.
              - type: InnerColumns
                column1:
                  - type: Text
                    txtColor: ""
                    bgColor: ""
                    content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                column2:
                  - type: Text
                    txtColor: ""
                    bgColor: ""
                    content: Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.
              - type: Text
                txtColor: ""
                bgColor: ""
                content: Voluptate est labore sit tempor exercitation nisi eiusmod pariatur magna est aliqua. Magna laborum elit mollit ea occaecat incididunt Lorem Lorem incididunt nisi esse fugiat anim exercitation. Mollit velit laboris adipisicing enim ad eiusmod deserunt veniam nulla adipisicing amet pariatur nostrud exercitation. Velit laborum occaecat nulla ex nulla esse laborum ex duis duis magna. Ipsum laboris commodo do do eiusmod. Consectetur culpa fugiat occaecat enim ullamco tempor amet velit duis culpa commodo dolor minim. Ea sunt culpa id ea amet.
              - type: ImageBlock
                wideImage: true
                src: /uploads/map.png
                alt: MapaMundi
                description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  - section: Mapas
    components:
      - type: Map
        txtColor: ""
        bgColor: "#006a49ff"
        components:
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              # Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
          - type: Spacer
            desktop: 160px
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              ###### Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem

              ###### Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        columnAlign: left
        floatingText: true
        mapView: view_1
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        components:
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              #### Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_3
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
        columnAlign: left
        floatingText: false
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        components:
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_2
          - type: Text
            txtColor: ""
            bgColor: ""
            content: ""
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_2
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
        columnAlign: left
        floatingText: false
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        components:
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_4
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_3
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
        columnAlign: left
        floatingText: true
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        components:
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_3
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
        columnAlign: left
        floatingText: false
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        components:
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_2
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_2
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
        columnAlign: left
        floatingText: false
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        components:
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_4
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
          - type: MapView
            txtColor: ""
            bgColor: ""
            mapView: view_3
          - type: Text
            txtColor: ""
            bgColor: ""
            content: |-
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
        columnAlign: left
        floatingText: true
      - type: Map
        txtColor: ""
        bgColor: "#000000ff"
        columnAlign: left
        floatingText: false
  - section: Teste
    components:
      - type: Group
        layout: default
        txtColor: ""
        bgColor: ""
        backgroundImage: ""
        overlay: ""
        components:
          - type: Text
            txtColor: ""
            bgColor: ""
            content: ""
          - type: VideoEmbed
            wideVideo: false
            videoUrl: ""
            videoCaption: ""
---

