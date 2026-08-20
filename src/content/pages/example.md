---
standalone: true
title: Teste Layout
slug: home
projeto: Exemplo
pageSettings:
  language: pt-BR
  link_pt_br: /home
  link_en: /teste
  link_es: /home-es
  animations: enable_all
  direction: right
  seoTitle: ''
  seoDescription: ''
  seoKeywords: []
  seoImage: ''
pageTheme:
  primaryColor: '#454040'
  secondaryColor: '#ffffff'
  highlightColor: '#9c5454'
  auxiliaryColor: '#3f3899'
  displayFont: ''
  textFont: ''
  spacingPatterns:
    - name: Teste
      mobile: '10'
      tablet: '11'
      desktop: '12'
pageInclude: null
modules:
  - type: MapBox
    style: mapbox://styles/marlus/cjyt3uyhf15mr1cthc2942wxz
    token: pk.eyJ1IjoibWFybHVzIiwiYSI6IjlmYlhtaEkifQ.vMxORYorRKnueDl3E5itEQ
    centerLng: '-58.569363795'
    centerLat: '-1.917321274'
    zoom: '2'
    bearing: '0'
    pitch: '0'
    layers: ''
    columnAlign: left
    floatingText: true
    views:
      - id: map1_view1
        centerLng: '-58.569363795'
        centerLat: '-1.917321274'
        zoom: '3'
        mobileZoom: ''
        duration: '2000'
        bearing: '0'
        pitch: '0'
        layers: |-
          amazonia-limites
          mineracaoamazonia
        title: ''
        notes: ''
        items:
          - icon: show_chart
            colorIcon: '#bffa80ff'
            typeIcon: outlined
            iconFill: true
            text: Legend_Text_1
          - icon: square
            colorIcon: '#e31c1cff'
            typeIcon: outlined
            iconFill: true
            text: Legend_Text_2
      - id: map1_view2
        centerLng: '-58.569363795000015'
        centerLat: '-1.917321274000017'
        zoom: '3.5'
        mobileZoom: ''
        duration: '2000'
        bearing: '0'
        pitch: '0'
        layers: |-
          amazonia-limites
          mineracaoamazonia
          anpamazonia
          tiamazonia
        title: ''
        notes: ''
        items: []
      - id: map1_view3
        centerLng: '-77.921'
        centerLat: '-2.038'
        zoom: '6'
        mobileZoom: ''
        duration: '2000'
        bearing: '0'
        pitch: '0'
        layers: |-
          mineracaoamazonia
          amazonia-limites
          ecuador-limites
          tiamazonia
          anpamazonia
        title: ''
        notes: ''
        items: []
      - id: map1_view4
        centerLng: '-78.195'
        centerLat: '-3.893'
        zoom: '7'
        mobileZoom: ''
        duration: '2000'
        bearing: '0'
        pitch: '0'
        layers: |-
          mineracaoamazonia[pais==Ecuador]
          ecuador-limites
          expulsion-regions
          tiamazonia[pais==Ecuador]
          anpamazonia[pais==Ecuador]
        title: ''
        notes: ''
        items: []
      - id: map2_view1
        centerLng: '-78.465'
        centerLat: '-3.584'
        zoom: '12.2'
        mobileZoom: ''
        duration: '4000'
        bearing: '0'
        pitch: '0'
        layers: |-
          sat-2013
          expulsion-regions
          desajolos-mirador[Tipo==Comunidad]
        title: ''
        notes: ''
        items: []
      - id: map2_view2
        centerLng: '-78.465'
        centerLat: '-3.584'
        zoom: '12.2'
        mobileZoom: ''
        duration: '4000'
        bearing: '0'
        pitch: '0'
        layers: |-
          desajolos-mirador
          expulsion-regions
          sat-2013
        title: ''
        notes: ''
        items: []
      - id: map2_view3
        centerLng: '-78.465'
        centerLat: '-3.584'
        zoom: '12.2'
        mobileZoom: ''
        duration: '2000'
        bearing: '0'
        pitch: '0'
        layers: |-
          desajolos-mirador
          expulsion-regions
          sat-2018
        title: ''
        notes: ''
        items: []
components:
  - type: Group
    id: Grupo 01
    shortTitle: Grupo 01
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia:
      - type: backgroundVideo
        videoSrc: https://documental.xyz/assets/main/expulsion/expulsiones-intro-low.mp4
    overlay: dark
    components:
      - type: ColumnSticky
        txtColor: ''
        bgColor: ''
        paddingTop: true
        paddingBottom: true
        layout: text-bigger
        title: 'BLOCO: COLUMN STICKY _ LAYOUT: TEXT-BIGGER!!@'
        components:
          - type: Spacer
            desktop: 800px
            tablet: 800px
            mobile: 800px
          - type: Text
            hasDropCap: false
            content: |-
              Bloco: Column Sticky_Background: Video_Overlay: Dark_Padding: Top + Bottom_Bloco Spacer: 800px_Bloco: Text_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt_Bloco Spacer: 150px.
          - type: Spacer
            desktop: 100px
            tablet: 100px
            mobile: 100px
    layout: default
  - type: Group
    id: Grupo 02
    shortTitle: Grupo 02
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        txtColor: ''
        bgColor: ''
        paddingTop: false
        paddingBottom: false
        layout: text-bigger
        title: 'BLOCO: COLUMN STICKY_TÍTULO: TEXT-BIGGER'
        components:
          - type: Text
            hasDropCap: false
            content: |-
              # BLOCO: COLUMN_BLOCO: TEXT_FONTE: HEADING 1

              Bloco: Text_Content_Fonte: Paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim **ipsam voluptatem** quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              - Bloco: Text_Content_Bulleted list_Sed ut perspiciatis unde omnis
              - Sed ut perspiciatis unde omnis
              - Sed ut perspiciatis unde omnis

              1. Bloco: Text_Content_Numbered list_Nemo enim ipsam voluptatem
              2. Nemo enim ipsam voluptatem
              3. Nemo enim ipsam voluptatem

              Link: [Sed ut perspiciatis unde omnis iste natus error](https://documental.xyz/) sit voluptatem accusantium doloremque laudantium, _totam rem aperiam, eaque ipsa quae ab_ illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              > Bloco: Text_Content_Block Quote_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          - type: Pullquote
            content: 'Bloco: Pullquote _ Content _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
            txtColor: ''
            bgColor: ''
            byline: 'Bloco: Pullquote_Byline'
          - type: InnerColumns
            column1:
              components:
                - type: Text
                  hasDropCap: false
                  content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            column2:
              components:
                - type: Text
                  hasDropCap: false
                  content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    layout: default
  - type: Group
    id: Grupo 03
    shortTitle: Grupo 03
    longTitle: ''
    description: ''
    showInMenu: true
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
        title: 'BLOCO: COLUMN STICKY_ LAYOUT: TEXT-BIGGER'
        components:
          - type: Text
            hasDropCap: false
            content: |-
              Bloco: Text_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              ###### 

              ###### Fonte: Heading 6_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              ##### Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              #### Fonte: Heading 4_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              ### Fonte: Heading 3_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    layout: default
  - type: Group
    id: Grupo 04
    shortTitle: Grupo 04
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Columns
        paddingTop: false
        paddingBottom: false
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: 390px
              tablet: 390px
              mobile: 390px
            - type: ImageBlock
              wideImage: true
              src: /uploads/arqueological-remains_05.jpg
              alt: 'Bloco: Image Block_Alt Test'
              description: 'Bloco: Image Block_Wide: On_Description_Sed ut perspiciatis unde omnis iste natus error'
            - type: Pullquote
              content: 'Bloco: Pullquote _ Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
              txtColor: '#660808ff'
              bgColor: ''
              byline: 'Bloco: Pullquote_Caption'
        column2:
          components:
            - type: Text
              hasDropCap: true
              content: |-
                Bloco: Columns_Bigger right_Bloco: Text_Dropcap: On_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, **totam rem aperiam**, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            - type: ImageBlock
              wideImage: true
              src: /uploads/arqueological-remains_02.jpg
              alt: 'Bloco: Image Block_Wide: On_Alt Text'
              description: 'Bloco: Image Block_Wide: On_Description'
        desktop: 200px
        tablet: ''
        mobile: ''
    layout: default
  - type: Group
    id: Grupo 05
    shortTitle: Grupo 05
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Custom
    customBgColor: '#a05454a1'
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/expulsion-san-marcos.jpg
    overlay: ''
    components:
      - type: ColumnSticky
        txtColor: ''
        bgColor: ''
        paddingTop: true
        paddingBottom: true
        layout: title-bottom
        title: 'BLOCO: COLUMN STICKY _ LAYOUT: TITLE-BOTTOM'
        components:
          - type: Text
            hasDropCap: false
            content: 'Background: Image_Background Color: Custom_Bloco: Text_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    layout: default
  - type: Group
    id: Grupo 06
    shortTitle: Grupo 06
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Columns
        paddingTop: false
        paddingBottom: false
        invertOnMobile: false
        columnsAlign: 66-33
        column1:
          components:
            - type: Text
              hasDropCap: false
              content: |-
                ##### Bloco: Columns _ Bigger Left _ Bloco: Text _ Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus

                Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit
            - type: VideoEmbed
              wideVideo: true
              videoUrl: https://player.vimeo.com/video/350133875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
              videoCaption: 'Bloco: Video Embed_Wide: On_Video Caption'
            - type: Text
              hasDropCap: false
              content: |-
                Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        column2:
          components:
            - type: Timeline
              components:
                - type: TimelineBullet
                  text: Bloco:Timeline_Timeline Bullet 1_Text
                  content: |-
                    ###### Timeline Bullet 1_Content_Fonte: Heading 6_Sed ut perspiciatis unde omnis 

                    Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                - type: TimelineBullet
                  text: Timeline Bullet 2_Text
                  content: |-
                    ###### Timeline Bullet 2_Content_Fonte: Heading 6

                    Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                - type: TimelineBullet
                  text: Timeline Bullet 3_Text
                  content: Timeline Bullet 3_Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                - type: TimelineBullet
                  text: Timeline Bullet 4_Text
                  content: Timeline Bullet 4_Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                - type: TimelineBullet
                  text: Timeline Bullet 5_Text
                  content: |-
                    ###### Timeline Bullet 5_Content_Fonte: Heading 6

                    Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                - type: TimelineBullet
                  text: ''
                  content: ''
            - type: ImageBlock
              wideImage: true
              src: /uploads/arqueological-remains_07.jpg
              alt: 'Bloco: Image Block_Wide: On_Alt Text'
              description: 'Bloco: Image Block_Wide: On_Description'
      - type: ImageBlock
        wideImage: false
        src: /uploads/expulsion-san-marcos.jpg
        alt: ''
        description: 'Bloco: Image Block_Description'
      - type: Column
        paddingTop: true
        paddingBottom: false
        components:
          - type: ImageBlock
            wideImage: true
            src: /uploads/expulsion-san-marcos.jpg
            alt: 'Bloco: Image Block_Wide: On_Alt Text'
            description: 'Bloco: Column_ Bloco: Image Block_Wide: On_Description'
  - type: Group
    id: Grupo 07
    shortTitle: Grupo 07
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Primary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Slider
        slides:
          - image: /uploads/arqueological-remains_03.jpg
            caption: 'Bloco: Slider_Caption'
          - image: /uploads/arqueological-remains_07.jpg
            caption: 'Bloco: Slider_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
          - image: /uploads/arqueological-remains_02.jpg
            caption: 'Bloco: Slider_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
  - type: Group
    id: Grupo  08
    shortTitle: Grupo 08
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Columns
        paddingTop: false
        paddingBottom: false
        invertOnMobile: false
        columnsAlign: 66-33
        column1:
          components:
            - type: Text
              hasDropCap: false
              content: '##### Bloco: Columns _ Bigger Left _ Bloco: Text _ Content _ Fonte: Heading 5 _ Sed ut perspiciatis unde omnis iste natus'
            - type: InnerColumns
              column1:
                components:
                  - type: Text
                    hasDropCap: false
                    content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              column2:
                components:
                  - type: Text
                    hasDropCap: false
                    content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            - type: Timeline
              desktop: '10'
              tablet: '10'
              mobile: '10'
              components:
                - type: TimelineBullet
                  text: 'Bloco: Timeline_Timeline Bullet 1_Text'
                  content: |-
                    ###### Timeline Bullet_Content_Fonte: Heading 6_Sed ut perspiciatis unde omnis iste 

                    Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                - type: TimelineBullet
                  text: Timeline Bullet 2_Text
                  content: 'Timeline Bullet_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - type: TimelineBullet
                  text: Timeline Bullet 3_Text
                  content: |-
                    ###### Timeline Bullet_Content_Fonte: Heading 6_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium

                    Timeline Bullet_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                - type: TimelineBullet
                  text: Timeline Bullet 4_Text
                  content: 'Timeline Bullet_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
                - type: TimelineBullet
                  text: Timeline Bullet 5_Text
                  content: 'Timeline Bullet_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            - type: Gallery
              description: 'Bloco: Gallery_Description_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
              uniqid: BlocoGalleryUniqueID1
              images:
                - image: /uploads/arqueological-remains_03.jpg
                  caption: 'Bloco: Gallery_Image 1_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - image: /uploads/arqueological-remains_07.jpg
                  caption: 'Bloco: Gallery_Image 2_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - image: /uploads/arqueological-remains_02.jpg
                  caption: 'Bloco: Gallery_Image 3_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        column2:
          components:
            - type: Spacer
              desktop: 550px
              tablet: 550px
              mobile: 550px
            - type: Gallery
              description: 'Bloco: Gallery_Description_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
              uniqid: BlocoGalleryUniqueID2
              images:
                - image: /uploads/expulsion-arch-3.jpeg
                  caption: 'Bloco: Gallery_Image 1_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - image: /uploads/bWFpbi9leHB1bHNpb24vZXhwdWxzaW9uLWFyY2gtNC5qcGVn.jpeg
                  caption: 'Bloco: Gallery_Image 2_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - image: /uploads/expulsion-border-peru-ecuador.jpg
                  caption: 'Bloco: Gallery_Image 3_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            - type: Spacer
              desktop: 400px
              tablet: 400px
              mobile: 400px
            - type: BigNumbers
              alignment: caption-bottom
              items:
                - number: '500'
                  caption: 'Bloco: Big Numbers_Caption'
                - number: '600'
                  caption: 'Bloco: Big Numbers_Caption'
                - number: '700'
                  caption: 'Bloco: Big Numbers_Caption'
    layout: default
  - type: Group
    id: Grupo 09
    shortTitle: Grupo 09
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/expulsion-san-marcos.jpg
    overlay: dark
    components:
      - type: ColumnSticky
        txtColor: ''
        bgColor: ''
        paddingTop: true
        paddingBottom: true
        layout: title-bottom
        title: 'BLOCO: COLUMN STICKY _ LAYOUT: TITLE-BOTTOM _ TITLE'
        components:
          - type: Spacer
            hasDropCap: false
            content: |-
              # BLOCO: COLUMN / FONTE: HEADING 1 / SED UT PERSPICIATIS UNDE OMNIS ISTE

              Bloco Column_Bloco Text_Paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            desktop: 800px
            tablet: 800px
            mobile: 800px
          - type: Text
            hasDropCap: false
            content: |-
              Bloco Column Sticky_Background: Image_Overlay: Dark_Padding: Top + Bottom

              Bloco Spacer: 800px


              Bloco Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            imageLeft: /uploads/toxicriver_before2.png
            imageRight: /uploads/toxicriver_after2.png
            caption: 'Bloco: Compare\_Caption\_Fonte: Paragraph'
    layout: default
---
