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
  primaryColor: '#000000'
  secondaryColor: '#ffffff'
  highlightColor: '#bd7575'
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
    id: Grupo 4
    shortTitle: Grupo 4
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
              Bloco: Column Sticky_Background: Video_Overlay: Dark_Padding: Top + Bottom_Bloco Spacer: 800px_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              Bloco: Text_Content_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt_Bloco Spacer: 150px.
          - type: Spacer
            desktop: 100px
            tablet: ''
            mobile: ''
    layout: default
  - type: Group
    id: Grupo 5
    shortTitle: Grupo 5
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
          - type: Spacer
            desktop: 50px
            tablet: ''
            mobile: ''
          - type: Text
            hasDropCap: true
            content: |-
              # BLOCO: COLUMN_BLOCO: TEXT_FONTE: HEADING 1

              Bloco: Text_Content_Fonte: Paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, **eaque ipsa quae ab illo inventore veritatis** et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit **aspernatur aut odit aut fugit**, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              - Bloco: Text_Content_Bulleted list_Sed ut perspiciatis unde omnis
              - Sed ut perspiciatis unde omnis
              - Sed ut perspiciatis unde omnis

              1. Bloco: Text_Content_Numbered list_Nemo enim ipsam voluptatem
              2. Nemo enim ipsam voluptatem
              3. Nemo enim ipsam voluptatem

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, _totam rem aperiam, eaque ipsa quae ab_ illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              > Bloco: Text_Content_Block Quote_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          - type: Pullquote
            content: 'Bloco: Pullquote _ Content _ Fonte: Paragraph _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
            txtColor: ''
            bgColor: ''
            byline: 'Bloco: Pullquote_Caption'
    layout: default
  - type: Group
    id: Grupo 1
    shortTitle: Grupo 1
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
    id: Grupo 6
    shortTitle: Grupo 6
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
            - type: Timeline
              components:
                - type: TimelineBullet
                  text: 'Bloco: Timeline_Timeline Bullet 1_Text'
                  content: Timeline Bullet 1_Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                - type: TimelineBullet
                  text: Timeline Bullet 2_Text_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam re
                  content: Timeline Bullet 2_Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                - type: TimelineBullet
                  text: Timeline Bullet 3_Text
                  content: Timeline Bullet 4_Content_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                - type: TimelineBullet
                  text: Timeline Bullet 4_Text_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. - Fim do texto
                  content: 'Timeline Bullet 5_Content_Fonte: Paragraph_Negrito_**Sed ut perspiciatis unde omnis** iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
            - type: Pullquote
              content: 'Bloco: Pullquote _ Content_Fonte: Paragraph _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
              txtColor: ''
              bgColor: ''
              byline: 'Bloco: Pullquote_Caption'
        column2:
          components:
            - type: Text
              hasDropCap: true
              content: |-
                Bloco: Text_Dropcap: On_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, **totam rem aperiam**, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            - type: ImageBlock
              wideImage: false
              src: /uploads/group-bg-2.png
              alt: 'Bloco: Image Block_Wide: Off_Alt Text'
              description: 'Bloco: Image Block_Wide: Off_Description'
        desktop: 200px
        tablet: ''
        mobile: ''
    layout: default
  - type: Group
    id: Grupo 2
    shortTitle: Grupo 2
    longTitle: ''
    description: ''
    showInMenu: false
    animations: true
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Custom
    customBgColor: '#a05454ff'
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
        title: 'BLOCO: COLUMN STICKY / TÍTULO: TITLE-BOTTOM'
        components:
          - type: Text
            hasDropCap: false
            content: |-
              Bloco: Column Sticky\_Padding: On\_Background Color: Custom

              Bloco: Text

              Fonte: Paragraph\_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              ###### 

              ###### Fonte: Heading 6\_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              ##### Fonte: Heading 5\_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

              #### Fonte: Heading 4\_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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

              # Fonte: HEADING 1
    layout: default
  - type: Group
    id: Grupo 3
    shortTitle: Grupo 3
    longTitle: ''
    description: ''
<<<<<<< HEAD
    showInMenu: false
=======
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
              uniqid: galeria-1
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
>>>>>>> 507162b ([fix] general front-end tweaks)
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

              # Fonte: HEADING 1
            imageLeft: /uploads/toxicriver_before2.png
            imageRight: /uploads/toxicriver_after2.png
            caption: 'Bloco: Compare\_Caption\_Fonte: Paragraph'
          - type: Text
            hasDropCap: false
            content: |-
              Bloco: Text_Content_Fonte: Paragraph Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              - Bloco: Text_Content_Bulleted list_Sed ut perspiciatis unde omnis
              - Sed ut perspiciatis unde omnis
              - Sed ut perspiciatis unde omnis

              1. Bloco: Text_Content_Numbered list_Nemo enim ipsam voluptatem
              2. Nemo enim ipsam voluptatem
              3. Nemo enim ipsam voluptatem

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              > Bloco: Text_Content_Block Quote_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          - type: Pullquote
            content: 'Bloco: Pullquote_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
            txtColor: '#f5f5f5ff'
            bgColor: '#b15959ff'
            byline: Pullquote_Caption
    layout: default
  - type: Group
    id: Grupo 7
    shortTitle: Grupo 7
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
      - type: Column
        hasDropCap: false
        content: |-
          Imagem do background com Overlay dark

          Bloco texto solto sem bloco coluna - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

          Trecho parágrafo em Negrito - **Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.&#32;**_Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt._ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        paddingTop: false
        paddingBottom: false
        components:
          - type: ChartPercentage
            chartPercentageTitle: 'Bloco: Column_Bloco: Chart Percentage_Title'
            chartPercentageNotes: 'Bloco: Chart Percentage_Chart Notes_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            chartPercentageValues:
              - label: Value Label 1
                color: '#958e8eff'
                number: 8
              - label: Value Label 2
                color: '#c157a0ff'
                number: 4
              - label: Value Label 3
                color: '#8c1818ff'
                number: 10
              - label: Value Label 4
                color: '#3d1e85ff'
                number: 50
              - label: Value Label 5
                color: '#c3a822ff'
                number: 5
              - label: Value Label 6
                color: '#09c82fff'
                number: 1
              - label: Value Label 7
                color: '#50b2b4ff'
                number: 3
              - label: Value Label 8
                color: '#a2b7d2ff'
                number: 26
          - type: Text
            hasDropCap: false
            content: '#### Bloco: Column_Bloco: Text_Fonte: Heading 4'
          - type: Slider
            slides:
              - image: /uploads/arqueological-remains_03.jpg
                caption: 'Bloco: Slider_Caption_Sed ut perspiciatis unde omnis iste natus'
              - image: /uploads/arqueological-remains_04.jpg
                caption: 'Bloco: Slider_Caption'
              - image: /uploads/bWFpbi9leHB1bHNpb24vYXJxdWVvbG9naWNhbC1yZW1haW5zXzAyLmpwZw==.jpeg
                caption: ''
              - image: /uploads/expulsion-border-peru-ecuador.jpg
                caption: 'Bloco: Slider_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
              - image: /uploads/expulsion-church.jpg
                caption: 'Bloco: Slider_Caption_Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
              - image: /uploads/expulsion-arch-4.jpeg
                caption: ''
    layout: default
  - type: Group
    id: Grupo  8
    shortTitle: Grupo 8
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
            - type: Timeline
              components:
                - type: TimelineBullet
                  text: Timeline Bullet 1_Text_Sed ut perspiciatis unde omnis
                  content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                - type: TimelineBullet
                  text: Timeline Bullet 2_Text_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                  content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                - type: TimelineBullet
                  text: Timeline Bullet 3_Text_
                  content: ''
                - type: TimelineBullet
                  text: Timeline Bullet 4_Text_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. - Fim do texto
                  content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              desktop: '10'
              tablet: '10'
              mobile: '10'
            - type: Gallery
              description: 'Bloco: Gallery_Description_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
              uniqid: 'Bloco: Gallery_Unique ID'
              images:
                - image: /uploads/arqueological-remains_01.jpg
                  caption: Bloco Gallery_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                - image: /uploads/arqueological-remains_02.jpg
                  caption: Bloco Gallery_Caption_
                - image: /uploads/arqueological-remains_03.jpg
                  caption: Bloco Gallery_Caption_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        column2:
          components:
            - type: ChartBar
              chartTitle: 'Bloco: Columns_Bloco: Chart Bar_Chart Title'
              chartNotes: Chart Notes_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
              chartBars:
                - label: Label 1
                  color: '#c44545ff'
                  number: 26
                  numberPercent: 26
                - label: Label 2
                  color: '#7b0a0aff'
                  number: 52.5
                  numberPercent: 52
                - label: Label 3
                  color: '#cd9d9dff'
                  number: 78.6
                  numberPercent: 78
                - label: Label 4
                  color: '#5e1212ff'
                  number: 63.2
                  numberPercent: 63
            - type: ImageBlock
              wideImage: true
              src: /uploads/arqueological-remains_01.jpg
              alt: 'Bloco: Image Block_Alt Text'
              description: 'Bloco: Image Block_Description'
    layout: default
  - type: Group
    id: Grupo 9
    shortTitle: Grupo 9
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
      - type: Slider
        slides:
          - image: /uploads/arqueological-remains_01.jpg
            caption: ''
          - image: /uploads/arqueological-remains_02.jpg
            caption: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    layout: default
  - type: Group
    id: Grupo 10
    shortTitle: Grupo 10
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
      - type: Column
        paddingTop: false
        paddingBottom: false
        components:
<<<<<<< HEAD
          - type: ImageBlock
            wideImage: true
            src: /uploads/arqueological-remains_07.jpg
            alt: 'Bloco: Column_Bloco: Image Block_Wide: On_Alt Text'
            description: 'Bloco: Column_Bloco: Image Block_Wide: On_Description'
          - type: VideoEmbed
            wideVideo: true
            videoUrl: https://player.vimeo.com/video/350133875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: 'Bloco: Video Embed_Wide: On_Video Caption'
    layout: default
=======
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
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
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
>>>>>>> 507162b ([fix] general front-end tweaks)
  - type: Map
    id: Mapa 1
    shortTitle: Mapa 1
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    bgColor: Highlight
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view1
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Column Align: Left_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error'
      - type: Text
        hasDropCap: false
        content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    columnAlign: left
    floatingText: true
  - type: Group
    id: Grupo 11
    shortTitle: Grupo 11
    longTitle: ''
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Primary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Spacer
        desktop: 500px
        tablet: ''
        mobile: ''
  - type: Map
    id: Mapa 2
    shortTitle: Mapa 2
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    bgColor: Highlight
    components:
      - type: Text
        hasDropCap: false
        content: '###### Bloco: Map_Column Align: Right_Floating Text: Off_Bloco: Text_Fonte: Heading 6_Sed ut perspiciatis unde omnis iste natus error'
      - type: Text
        hasDropCap: false
        content: 'Bloco: Text_Fonte: Paragraph_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: map1_view1
    columnAlign: right
    floatingText: false
  - type: Group
    id: Grupo 12
    shortTitle: Grupo 12
    longTitle: ''
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Primary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Spacer
        desktop: 500px
        tablet: ''
        mobile: ''
  - type: Map
    id: Mapa 3
    shortTitle: Mapa 3
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    bgColor: ''
    components:
      - type: Text
        hasDropCap: false
        content: '##### Bloco: Map_Column Align: Center_Bloco: Text_Fonte: Heading 5_Sed ut perspiciatis unde omnis iste natus error'
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
  - type: Group
    id: Grupo 13
    shortTitle: Grupo 13
    longTitle: ''
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Primary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Spacer
        desktop: 500px
        tablet: ''
        mobile: ''
  - type: Map
    id: Mapa 4
    shortTitle: Mapa 4
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Primary
    bgColor: Highlight
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
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
<<<<<<< HEAD
    columnAlign: left
=======
      - type: VideoEmbed
        wideVideo: false
        videoUrl: https://www.youtube.com/watch?v=u3TpsrmdcSE
        videoCaption: ''
      - type: Timeline
        components:
          - type: TimelineBullet
            content: Ea incididunt sunt quis dolor cupidatat velit ipsum officia ullamco sunt id laboris fugiat pariatur sint. Voluptate anim id reprehenderit labore officia laborum enim ea nostrud in. Ullamco sit officia dolore cillum laborum adipisicing. Elit ex ex excepteur exercitation excepteur officia sunt incididunt irure nisi amet.
            text: Lorem Ispmi
    columnAlign: right
>>>>>>> 507162b ([fix] general front-end tweaks)
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
<<<<<<< HEAD
=======
  - type: Cta
    id: Grupo 15
    shortTitle: Grupo 15
    longTitle: ''
    description: ''
    showInMenu: true
    animations: true
    txtColor: Secondary
    bgColor: Primary
    imgBg: /uploads/arqueological-remains_03.jpg
    mediaType: ''
    media: ''
    ctaText: 'Bloco: CTA_CTA Text_Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    highlightedText: Sed ut perspiciatis unde omnis iste natus error
    link:
      url: '#'
      target: _self
      text: Link_Text_Sed ut perspiciatis unde omnis iste
>>>>>>> 507162b ([fix] general front-end tweaks)
  - type: Group
    id: Grupo 14
    shortTitle: Grupo 14
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
<<<<<<< HEAD
      - type: Column
        paddingTop: false
        paddingBottom: false
        components:
          - type: Cards
            cardsArr:
              - Card:
                  type: Card
                  title: Cards_Title_1
                  text: 'Bloco: Column_Bloco: Cards_Text_Fonte: Paragraph_Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cosectertur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'
                  link: null
                  icon: ''
              - Card:
                  type: Card
                  title: Cards_Title_2
                  text: 'Bloco: Column_Bloco: Cards_Text_Fonte: Paragraph_Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cosectertur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'
                  link: null
                  icon: ''
          - type: Cards
            cardsArr:
              - Card:
                  type: Card
                  title: Cards_Title_3
                  text: 'Bloco: Column_Bloco: Cards_Text_Fonte: Paragraph_Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cosectertur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'
                  link: null
                  icon: ''
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
=======
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 66-33
        column1:
          components:
            - type: Text
              hasDropCap: false
              content: '### Bloco: Columns _ Bigger Right _ Bloco: Text _ Fonte: Heading 3'
            - type: Text
              hasDropCap: false
              content: |-
                Fonte: Paragraph _ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

                Sed ut perspiciatis unde omnis 

                Sed ut perspiciatis unde omnis 

                Sed ut perspiciatis unde omnis 

                Sed ut perspiciatis unde omnis 

                Sed ut perspiciatis unde omnis 

                Sed ut perspiciatis unde omnis
            - type: Spacer
              desktop: 300px
              tablet: ''
              mobile: ''
            - type: Text
              hasDropCap: false
              content: '#### Bloco: Text _ Fonte: Heading 4'
            - type: LogosGroup
              logos:
                - image: /uploads/logo-1.jpg
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
                - image: /uploads/logo-2.png
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
                - image: /uploads/favicon.svg
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
            - type: Text
              hasDropCap: false
              content: '#### Bloco: Text _ Fonte: Heading 4'
            - type: LogosGroup
              logos:
                - image: /uploads/Captura de Tela-20241220084110-267x93.png
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
                - image: /uploads/logo-3.png
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
                - image: /uploads/Captura de Tela-20241220084110-267x93.png
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
                - image: /uploads/logo-3.png
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
                - image: /uploads/Captura de Tela-20241220084110-267x93.png
                  link:
                    url: https://documental.xyz/
                    target: _blank
                    customTarget: ''
                    title: ''
        column2:
          components:
            - type: Spacer
              desktop: '10'
              tablet: ''
              mobile: ''
  - type: Group
    id: grupo-17
    shortTitle: Grupo 17
    longTitle: Grupo 17
    description: ''
    showInMenu: false
    animations: true
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: VideoEmbed
        wideVideo: false
        videoUrl: https://www.youtube.com/watch?v=1HNkgkL7hDo
        videoCaption: Lorem ipsum dolor sit
      - type: VideoEmbed
        wideVideo: true
        videoUrl: https://www.youtube.com/watch?v=1HNkgkL7hDo
        videoCaption: Lorem ipsum dolor sit
      - type: LogosGroup
        logos:
          - image: /uploads/Captura de Tela-20241220083834-158x147.png
            link:
              url: '#'
              customTarget: ''
              title: ''
          - image: /uploads/Captura de Tela-20241220084024-224x105.png
            link:
              url: '#'
              customTarget: ''
              title: ''
          - image: /uploads/Captura de Tela-20241220084110-267x93.png
            link:
              url: '#'
              customTarget: ''
              title: ''
      - type: CardsCall
        cardsCallArr:
          - link:
              url: '#'
              target: ''
              customTarget: ''
            img:
              src: /uploads/arqueological-remains_01.jpg
              alt: ''
            title: Lorem I[sium
            text: Minim sint in nostrud pariatur veniam amet mollit in ex duis fugiat adipisicing ea occaecat. In laboris mollit minim officia eiusmod dolore fugiat dolore pariatur fugiat enim aute est excepteur.
          - link:
              url: '#'
              target: ''
              customTarget: ''
            img:
              src: /uploads/arqueological-remains_05.jpg
              alt: ''
            title: Dolor sit amet
            text: Minim sint in nostrud pariatur veniam amet mollit in ex duis fugiat adipisicing ea occaecat. In laboris mollit minim officia eiusmod dolore fugiat dolore pariatur fugiat enim aute est excepteur.
      - type: BigNumbers
        alignment: caption-bottom
        items:
          - number: '134234'
            caption: Lorem Ispum dolor
          - number: '7136'
            caption: Dolor sit amter
          - number: '76956'
            caption: Sigm sod lort
      - type: Spacer
        desktop: 200px
        tablet: 200px
        mobile: 200px
>>>>>>> 507162b ([fix] general front-end tweaks)
---

