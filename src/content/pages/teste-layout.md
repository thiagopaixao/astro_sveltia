---
title: Teste Layout
slug: layout
pageSettings:
  language: pt-BR
  link_pt_br: /layout
  link_en: /layout-en
  link_es: /layout-es
  animations: enable_all
  direction: left
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
mapbox:
  type: MapBox
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
          text: Legend_Text_1
        - icon: square
          colorIcon: '#e31c1cff'
          typeIcon: outlined
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
  center:
    lng: -54.875
    lat: -2.53
  mapView: ''
components:
  - type: Group
    id: Grupo 01
    shortTitle: Grupo 01
    longTitle: ''
    description: ''
    showInMenu: false
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
        title: 'BLOCO: COLUMN STICKY _ LAYOUT: TEXT-BIGGER'
        components:
          - type: Spacer
            desktop: 800px
            tablet: ''
            mobile: ''
          - type: Text
            hasDropCap: false
            content: |-
              Bloco: Column Sticky_Background: Video_Overlay: Dark_Padding: Top + Bottom_Bloco Spacer: 800px_Bloco: Text_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt_Bloco Spacer: 150px.
          - type: Spacer
            desktop: 100px
            tablet: ''
            mobile: ''
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
            content: '# BLOCO: COLUMN_BLOCO: TEXT_FONTE: HEADING 1'
          - type: Text
            hasDropCap: false
            content: |-
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
            byline: 'Bloco: Pullquote_Caption'
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
              tablet: ''
              mobile: ''
            - type: ImageBlock
              wideImage: true
              src: /uploads/arqueological-remains_05.jpg
              alt: 'Bloco: Image Block_Alt Test'
              description: 'Bloco: Image Block_Wide: On_Description_Sed ut perspiciatis unde omnis iste natus error'
            - type: Pullquote
              content: 'Bloco: Pullquote _ Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
              txtColor: ''
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
              content: '##### Bloco: Columns _ Bigger Left _ Bloco: Text _ Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus'
            - type: Text
              hasDropCap: false
              content: 'Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit'
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
        paddingTop: false
        paddingBottom: false
        components:
          - type: ImageBlock
            wideImage: true
            src: /uploads/expulsion-san-marcos.jpg
            alt: 'Bloco: Image Block_Wide: On_Alt Text'
            description: 'Bloco: Image Block_Wide: On_Description'
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
              desktop: '10'
              tablet: '10'
              mobile: '10'
            - type: Gallery
              description: 'Bloco: Gallery_Description_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
              uniqid: 'Bloco: Gallery_Unique ID'
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
              tablet: ''
              mobile: ''
            - type: Gallery
              description: 'Bloco: Gallery_Description_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
              uniqid: 'Bloco: Gallery_Unique ID'
              images:
                - image: /uploads/expulsion-arch-3.jpeg
                  caption: 'Bloco: Gallery_Image 1_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - image: /uploads/bWFpbi9leHB1bHNpb24vZXhwdWxzaW9uLWFyY2gtNC5qcGVn.jpeg
                  caption: 'Bloco: Gallery_Image 2_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                - image: /uploads/expulsion-border-peru-ecuador.jpg
                  caption: 'Bloco: Gallery_Image 3_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            - type: Spacer
              desktop: 400px
              tablet: ''
              mobile: ''
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
        title: 'BLOCO: COLUMN STICKY / TÍTULO: TITLE-BOTTOM'
        components:
          - type: Spacer
            hasDropCap: false
            content: |-
              # BLOCO: COLUMN / FONTE: HEADING 1 / SED UT PERSPICIATIS UNDE OMNIS ISTE

              Bloco Column_Bloco Text_Paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            desktop: 800px
            tablet: ''
            mobile: ''
          - type: Text
            hasDropCap: false
            content: |-
              Bloco Column Sticky_Background: Image_Overlay: Dark_Padding: Top + Bottom

              Bloco Spacer: 800px
              Bloco Text

              Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            imageLeft: /uploads/toxicriver_before2.png
            imageRight: /uploads/toxicriver_after2.png
            caption: 'Bloco: Compare\_Caption\_Fonte: Paragraph'
    layout: default
  - type: Group
    id: Grupo 10
    shortTitle: Grupo 10
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
            - type: ChartPercentage
              chartPercentageTitle: 'Bloco: Columns _ Bloco: Chart Percentage _Title'
              chartPercentageNotes: 'Bloco: Chart Percentage _ Chart Notes'
              chartPercentageValues:
                - label: Value _ Label 1
                  color: '#b06d6dff'
                  number: 20
                - label: Value _ Label 2
                  color: '#be3c3cff'
                  number: 30
                - label: Value _ Label 3
                  color: '#7c1818ff'
                  number: 40
                - label: Value _ Label 4
                  color: '#4e0808ff'
                  number: 10
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
            - type: ChartBar
              chartTitle: 'Bloco: Chart Bar _ Title'
              chartNotes: 'Bloco: Chart Bar _ Chart Notes _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
              chartBars:
                - label: Chart Bar _ Label 1
                  color: '#ac7272ff'
                  number: 60
                  numberPercent: 60
                - label: Chart Bar _ Label 2
                  color: '#b14e4eff'
                  number: 40
                  numberPercent: 40
                - label: Chart Bar _ Label 3
                  color: '#b32929ff'
                  number: 20
                  numberPercent: 40
                - label: Chart Bar _ Label 4
                  color: '#650606ff'
                  number: 50
                  numberPercent: 50
        column2:
          components:
            - type: Spacer
              chartTitle: 'Bloco: Columns _ Bloco: Chart Bar _ Title'
              chartNotes: Chart Notes_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              chartBars:
                - label: Chart Bart _ Label 1
                  color: '#c44545ff'
                  number: 26
                  numberPercent: 26
                - label: Chart Bart _ Label 2
                  color: '#7b0a0aff'
                  number: 52.5
                  numberPercent: 52
                - label: Chart Bart _ Label 3
                  color: '#cd9d9dff'
                  number: 78.6
                  numberPercent: 78
                - label: Chart Bart _ Label 4
                  color: '#5e1212ff'
                  number: 63.2
                  numberPercent: 63
              desktop: 250px
              tablet: ''
              mobile: ''
            - type: ChartBar
              chartTitle: 'Bloco: Columns _ Bloco: Chart Bar _ Title'
              chartNotes: Chart Notes_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              chartBars:
                - label: Chart Bart _ Label 1
                  color: '#c44545ff'
                  number: 26
                  numberPercent: 26
                - label: Chart Bart _ Label 2
                  color: '#7b0a0aff'
                  number: 52.5
                  numberPercent: 52
                - label: Chart Bart _ Label 3
                  color: '#cd9d9dff'
                  number: 78.6
                  numberPercent: 78
                - label: Chart Bart _ Label 4
                  color: '#5e1212ff'
                  number: 63.2
                  numberPercent: 63
              desktop: 400px
              tablet: ''
              mobile: ''
            - type: Text
              hasDropCap: false
              content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            - type: ChartPercentage
              chartPercentageTitle: 'Bloco: Chart Percentage _ Title'
              chartPercentageNotes: 'Bloco: Chart Percentage _ Chart Notes'
              chartPercentageValues:
                - label: Value _ Label 1
                  color: '#9c1111ff'
                  number: 30
                - label: Value _ Label 2
                  color: '#c45a5aff'
                  number: 20
                - label: Value _ Label 3
                  color: '#4f0d0dff'
                  number: 50
    layout: default
  - type: Group
    id: Grupo 11
    shortTitle: Grupo 11
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
      - type: ChartPercentage
        chartPercentageTitle: 'Bloco: Chart Percentage _ Title'
        chartPercentageNotes: 'Bloco: Chart Percentage _ Chart Notes _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        chartPercentageValues:
          - label: Value _ Label 1
            color: '#baa0a0ff'
            number: 20
          - label: Value _ Label 2
            color: '#9e6161ff'
            number: 30
          - label: Value _ Label 3
            color: '#ed7e7eff'
            number: 10
          - label: Value _ Label 4
            color: '#bb3a3aff'
            number: 10
          - label: Value _ Label 5
            color: '#991a1aff'
            number: 20
          - label: Value _ Label 6
            color: '#570a0aff'
            number: 10
      - type: ChartBar
        chartTitle: 'Bloco: Chart Bar_Title'
        chartNotes: 'Bloco: Chart Bar_Chart Notes_ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        chartBars:
          - label: Chart Bar _ Label 1
            color: '#bc9f9fff'
            number: 60
            numberPercent: 60
          - label: Chart Bar _ Label 2
            color: '#bc9f9fff'
            number: 40
            numberPercent: 40
          - label: Chart Bar _ Label 3
            color: '#bc9f9fff'
            number: 70
            numberPercent: 70
          - label: Chart Bar _ Label 4
            color: '#bc9f9fff'
            number: 80
            numberPercent: 80
          - label: Chart Bar _ Label 5
            color: '#bc9f9fff'
            number: 30
            numberPercent: 30
  - type: Group
    id: Grupo 12
    shortTitle: Grupo 12
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
        paddingTop: false
        paddingBottom: false
        components:
          - type: Text
            hasDropCap: false
            content: '# Bloco: Columns _ Bloco: Text _ Fonte: Heading 1'
          - type: Text
            hasDropCap: false
            content: |-
              Bloco: Text _ Fonte: Paragraph _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          - type: Compare
            imageLeft: /uploads/map.png
            imageRight: /uploads/map-1.png
            caption: 'Bloco: Compare _ Caption _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
  - type: Group
    id: Grupo 13
    shortTitle: Grupo 13
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
      - type: Compare
        imageLeft: /uploads/map.png
        imageRight: /uploads/map-1.png
        caption: 'Bloco: Compare _ Caption _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
  - type: Group
    id: Grupo 14
    shortTitle: Grupo 14
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: ''
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
        title: 'BLOCO: COLUMN STICKY _ LAYOUT: TITLE-BOTTOM _ TÍTULO _ SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM'
        components:
          - type: Text
            hasDropCap: false
            content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
  - type: Map
    id: Mapa 1
    shortTitle: Mapa 1
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
      - type: MapView
        txtColor: ''
        bgColor: ''
        paddingTop: false
        paddingBottom: false
        components:
          - type: VideoEmbed
            wideImage: true
            src: /uploads/arqueological-remains_07.jpg
            alt: 'Bloco: Column_Bloco: Image Block_Wide: On_Alt Text'
            description: 'Bloco: Column_Bloco: Image Block_Wide: On_Description'
            wideVideo: true
            videoUrl: https://player.vimeo.com/video/350133875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: 'Bloco: Video Embed_Wide: On_Video Caption'
          - type: VideoEmbed
            wideVideo: true
            videoUrl: https://player.vimeo.com/video/350133875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: 'Bloco: Video Embed_Wide: On_Video Caption'
        mapView: map1_view1
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Column Align: Left_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error'
      - type: Text
        hasDropCap: false
        content: 'Fonte: Paragraph _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: '###### Fonte: Heading 6 _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
      - type: Text
        hasDropCap: false
        content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    columnAlign: left
    floatingText: true
    layout: default
  - type: Map
    id: Mapa 2
    shortTitle: Mapa 2
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
      - type: Text
        hasDropCap: false
        content: '###### Bloco: Map_Column Align: Right_Floating Text: Off_Bloco: Text_Fonte: Heading 6_Sed ut perspiciatis unde omnis iste natus error'
        desktop: 500px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view1
    columnAlign: right
    floatingText: false
  - type: Map
    id: Mapa 3
    shortTitle: Mapa 3
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: ''
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Column Align: Center_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error'
        desktop: 500px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view1
    columnAlign: center
    floatingText: true
  - type: Map
    id: Mapa 4
    shortTitle: Mapa 4
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        desktop: 500px
        tablet: ''
        mobile: ''
        mapView: map1_view3
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Column Align_Left_Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      - type: Spacer
        desktop: 200px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      - type: Spacer
        desktop: 200px
        tablet: ''
        mobile: ''
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view4
      - type: Text
        hasDropCap: false
        content: 'Bloco: MapView_Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      - type: ImageBlock
        wideImage: false
        src: /uploads/expulsion-tendetza-antun_16x9edit.jpg
        alt: Image Block_Alt Text
        description: 'Bloco: Image Block_Description'
    columnAlign: left
    floatingText: true
  - type: Map
    id: Mapa 5
    shortTitle: Mapa 5
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    bgColor: Primary
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map2_view1
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
        desktop: 200px
        tablet: ''
        mobile: ''
      - type: Spacer
        txtColor: ''
        bgColor: ''
        desktop: 300px
        tablet: ''
        mobile: ''
        mapView: map1_view4
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        wideImage: false
        src: /uploads/expulsion-tendetza-antun_16x9edit.jpg
        alt: Image Block_Alt Text
        description: 'Bloco: Image Block_Description'
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map2_view2
      - type: Text
        hasDropCap: false
        content: '##### Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map2_view3
      - type: Text
        hasDropCap: false
        content: '##### Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
    columnAlign: right
    floatingText: true
  - type: Group
    id: Grupo 15
    shortTitle: Grupo 15
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        txtColor: ''
        bgColor: ''
        paddingTop: false
        paddingBottom: false
        components:
          - type: Cards
            cardsArr: []
          - type: Cards
            cardsArr: []
          - type: LogosGroup
            logos:
              - image: /uploads/logo-2.png
                link:
                  url: https://thiagopaixao.github.io/astro_sveltia/home/#
                  customTarget: ''
                  title: ''
              - image: /uploads/Captura de Tela-20241220084024-224x105.png
                link:
                  url: https://thiagopaixao.github.io/astro_sveltia/home/#
                  customTarget: ''
                  title: ''
              - image: /uploads/logo-1.jpg
                link:
                  url: https://www.advocacia.autonoma.xyz/
                  customTarget: ''
                  title: ''
        mapView: map2_view1
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map2_view2
      - type: Text
        hasDropCap: false
        content: '##### Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map2_view3
      - type: Text
        hasDropCap: false
        content: '##### Bloco: MapView_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
      - type: Spacer
        desktop: 300px
        tablet: ''
        mobile: ''
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
    columnAlign: right
    floatingText: true
---

