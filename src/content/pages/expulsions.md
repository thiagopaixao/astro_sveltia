---
title: Expulsions
slug: expulsions
pageSettings:
  type: pageSettings
  language: en
  direction: left
  seoTitle: ''
  seoDescription: ''
  seoKeywords: []
  seoImage: ''
pageTheme:
  type: pageTheme
  primaryColor: '#5e5e5e'
  secondaryColor: '#ffffff'
  highlightColor: '#000000'
  auxiliaryColor: '#000000'
  displayFont: https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap
  textFont: https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap
  spacingPatterns:
    - name: Padrão
      mobile: '10'
      tablet: '11'
      desktop: '12'
mapbox:
  columnAlign: center
  floatingText: false
  style: mapbox://styles/marlus/cjyt3uyhf15mr1cthc2942wxz
  center:
    lng: -58
    lat: -2
  zoom: 2
  bearing: 0
  pitch: 0
  layers: []
  token: pk.eyJ1IjoibWFybHVzIiwiYSI6IjlmYlhtaEkifQ.vMxORYorRKnueDl3E5itEQ
  views:
    - id: view_0
      center:
        lng: -58
        lat: -2
      duration: 2000
      zoom: 3
      bearing: 0
      pitch: 0
      layers:
        - amazonia-limites;mineracaoamazonia
      mobile:
        zoom: 3
      captions:
        title: ''
        notes: ''
        items:
          - icon: <span class="material-symbols-outlined" style="color:white">show_chart</span>
            text: Amazon limits
          - icon: ''
            text: Mining concessions
    - id: view_1
      center:
        lng: -58
        lat: -2
      duration: 2000
      zoom: 4
      bearing: 0
      pitch: 0
      layers:
        - amazonia-limites;mineracaoamazonia;anpamazonia;tiamazonia
        - ''
      mobile: {}
      captions:
        title: Meu título
        notes: '* Minha nota'
        items:
          - icon: <span class="material-symbols-outlined fill" style="color:white">show_chart</span>
            text: Municipality of Santarém (Pará)
          - icon: <span class="material-symbols-outlined fill" style="color:#FFF8DC">circle</span>
            text: Amazonas River
          - icon: <span class="material-symbols-outlined fill" style="color:blue">circle</span>
            text: Tapajós River
    - id: view_2
      center:
        lng: -54.73
        lat: -2.597
      duration: 3000
      zoom: 10
      bearing: 0
      pitch: 0
      layers:
        - br163
        - amazonas
        - foztapajos
      mobile: {}
      captions:
        title: false
        notes: false
        items:
          - icon: <span class="material-symbols-outlined fill" style="color:white">show_chart</span>
            text: Cuiabá-Santarém Highway (BR-163)
          - icon: <span class="material-symbols-outlined fill" style="color:#FFF8DC">circle</span>
            text: Amazonas River
          - icon: <span class="material-symbols-outlined fill" style="color:blue">circle</span>
            text: Tapajós River
    - id: view_3
      center:
        lng: -54.831
        lat: -2.457
      duration: 4000
      zoom: 10.2
      bearing: 0
      pitch: 0
      layers:
        - cidade-vila
        - pa457
      mobile: {}
      captions:
        title: false
        notes: false
        items:
          - icon: <span class="material-symbols-outlined fill" style="color:orange">show_chart</span>
            text: Everaldo Martins Highway (PA-457)
          - icon: <span class="material-symbols-outlined" style="color:yellow">square</span>
            text: Urban areas
    - id: view_4
      center:
        lng: -54.917
        lat: -2.529
      duration: 2000
      zoom: 10
      bearing: 0
      pitch: 0
      layers:
        - tiborari
      mobile: {}
      captions:
        title: false
        notes: false
        items:
          - icon: <span class="material-symbols-outlined fill" style="color:red">square</span>
            text: Borari Territory (preliminary demarcation)
  mapView: ''
components:
  - type: Group
    shortTitle: EXPULSIONS
    longTitle: ''
    description: ''
    showInMenu: true
    id: EXPULSIONS
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia:
      - type: backgroundVideo
        videoSrc: https://documental.xyz/assets/main/expulsion/expulsiones-intro-low.mp4
    overlay: dark
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: '10'
              tablet: '10'
              mobile: '10'
        column2:
          components:
            - type: Spacer
              desktop: 150px
              tablet: 150px
              mobile: 150px
            - type: Text
              hasDropCap: false
              content: |-
                # **EXPULSIONS**

                forced displacements and archaeological destruction by the mega-mining project Mirador in the Ecuadorian Amazonia.
            - type: Spacer
              desktop: 500px
              tablet: 500px
              mobile: 500px
            - type: Text
              hasDropCap: false
              content: |-
                There is a war going on over Amazonia. This is a conflict for the appropriation of the forest’s underground territory, which is as rich in mineral commodities as the forest’s aboveground is rich in fauna and flora. This is no even battle. It is disproportionally fought by powerful corporations in collision with state agents against local indigenous and peasant communities who stewardship the land and from the land make their livelihoods.

                This investigation examines the case of Project Mirador, a mega-mine development led by Chinese corporation Ecuacorriente in the region of the Cordillera del Cóndor, Shuar ancestral territory, one of the most biologically rich regions of the Amazon basin.

                For Project Mirador to be implemented, indigenous and peasant communities have been expropriated of their lands and evicted from their homes. Vast swaths of forests and numerous indigenous archaeological sites have been destroyed.

                These multiple forms of violence – social, cultural, ecological – are intimately tied to the ways global extraction industries are appropriating indigenous lands across South America and beyond.
            - type: Spacer
              desktop: 150px
              tablet: 150px
              mobile: 150px
  - type: Map
    shortTitle: _map1
    longTitle: ''
    description: ''
    showInMenu: false
    id: _map1
    txtColor: Secondary
    bgColor: Highlight
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: view_0
      - type: Text
        hasDropCap: false
        content: Mining, illegal or legal, is widespread throughout Amazonia, happening at both small and large scales. It is estimated that mining concessions [covers 21% of the total surface of the Amazon basin.](https://issuu.com/darperu/docs/megaproyectos_ingles_final) This is equivalent of imagining a territory over twice larger than Spain, predominantly formed by primary forests and innumerable freshwater streams, completely zoned for extraction – a mega-mine operating on planetary scale.
    columnAlign: right
    floatingText: true
  - type: Group
    shortTitle: _text1
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text1
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: Spanning over one million hectares along the border between Ecuador and Peru, the Cordillera del Cóndor is one of the most singular ecological niches of Amazonia. The Cóndor is also unique because of the millenary cultural history of this territory. These mountains sit in the ancestral land of the peoples belonging to the [Jivaroan language](https://www.worldcat.org/search?q=no%3A956353428), which is formed by Shuar, Achuar, Awajún (Aguaruna) and Wampis (Huambisa) peoples. Before colonization these nations had their own geopolitical organization, with different borders and routes of connection and exchange. Today their territory is divided by the border between Ecuador and Peru, with Shuar and Achuar communities living in the Ecuadorian side, and Awajún and Wampis groups living in the Peruvian side.
          - type: ImageBlock
            wideImage: false
            src: /uploads/expulsion-border-peru-ecuador.jpg
            alt: ''
            description: Photo documentation of the bi-lateral commission in charge of demarcating the border between Peru and Ecuador after the War of ’41. Situated to the south of the Ecuadorian Amazon, the border along the Cordillera del Cóndor mountain range remained undefined until the 1990s.
          - type: Text
            hasDropCap: false
            content: |-
              Starting with the War of ’41, until the Cenepa War of 1995, Peru and Ecuador fought for more than fifty years over the Cordillera del Cóndor. In the 1960s and 1970s, when both countries were under military dictatorships, governments sought to secure sovereignty over the disputed territory by fostering occupation through migration and colonization policies. This led to dramatic changes in the social geography of the region as indigenous territories were severely reduced; new villages, towns and roads were built; and forests were rapidly replaced by farm and pasture lands. 

              In the context of the neoliberal adjustments of the 1980s and 1990s, state-led projects of agricultural colonization were replaced by a different doctrine of border security that relied on corporate mining concessions as means to hold ground in the disputed territory. But until this moment, because of the decades-long military conflict, the Cordillera del Cóndor region was practically inaccessible, remaining protected from the encroachment of development projects. 

              The post-war peace agreements drafted in 1998 led to the creation of several reserves and parks across the border area, composing a mosaic of protected jurisdictions known as “peace parks.” Besides, vast areas on both sides of the border have been recognized as indigenous lands. Since the establishment of the Shuar Federation in the late 1960s in Ecuador, the Shuar people have mobilized to recuperate communal territories and sacred sites. Moreover, in the early 1990s Ecuador witnessed the [largest indigenous uprising in its modern history](https://www.youtube.com/watch?v=HVp0Q3B2ans), which resulted in a series of landmark territorial recognitions.
          - type: ImageBlock
            wideImage: false
            src: /uploads/expulsion-shuar-center.jpg
            alt: ''
            description: Shuar Center of Kupiamais, Tundayme Parish, Cordillera del Cóndor.
          - type: Text
            hasDropCap: false
            content: |-
              The Mirador project holds a concession of 2.994 hectares that occupies the entire area between the Tundayme and the Wawayme rivers. The Chinese–consortium led by Ecuacorriente also acquired rights to explore all other adjacent concessions to Mirador, being effectively in control of a territory larger than the urban area of the city of Barcelona. These concessions superimpose shuar territories and ecological protection areas.

              Mega-mining operations like project Mirador require the exploration of vast extensions of land to be economically viable and profitable. This is only possible through massive territorial enclosures, separating entire communities from land and water resources. As the history of the Project Mirador shows, this process of enclosure is conducted by means of various strategies of deception and violence, but not without resistance.
          - type: ImageBlock
            wideImage: false
            src: /uploads/mapa-concession.jpg
            alt: ''
            description: ''
  - type: Group
    shortTitle: DISPOSSESION & DISPLACEMENT
    longTitle: ''
    description: ''
    showInMenu: true
    id: DISPOSSESION & DISPLACEMENT
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/expulsion-tundayme-raul-sanchez_16x9edit.jpg
    overlay: dark
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: '10'
              tablet: '10'
              mobile: '10'
        column2:
          components:
            - type: Text
              hasDropCap: false
              content: |-
                # DISPOSSESION & DISPLACEMENT

                enclosures and forced evictions caused by project Mirador
            - type: Spacer
              desktop: 500px
              tablet: 500px
              mobile: 500px
            - type: Text
              hasDropCap: false
              content: 'In order to control the territory of the mining concession, the company Ecuacorriente used obscure procedures and intimidating tactics to divide communities and force them to leave their lands. This occurred with the connivance and direct support of the Ecuadorian State, which was instrumental to remove the population in two main ways: on the legal front, by making use of juridical mechanisms to expropriate land and persecute land and nature rights defenders; and on the territory, by deploying security forces to evict families that refused to abandon their land.'
            - type: Spacer
              desktop: 150px
              tablet: 150px
              mobile: 150px
  - type: Group
    shortTitle: _text2
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text2
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: |-
              Throughout the implementation of Project Mirador, the Ecuadorian government made use of a legal mechanism called _servidumbre_,  which allows land expropriation in case of projects defined as “public utility” or “national interest.” Under the _servidumbre_ mechanism, the affected party receives certain financial compensation for the expropriated property, but is obliged to leave the land.

              Testimony of victims show that land acquisitions conducted by Ecuacorriente and its intermediaries, as well as negotiations of _servidumbre_ with state representatives, were conducted under forms [social, psychological and physical coercion of families who were unwilling to give up their properties](https://investigacionpsicosocial.files.wordpress.com/2017/02/herida-abierta-del-cc3b3ndor.pdf).

              These “forcibly land sales” began in the early 2000s, when the Mirador concession was under control of the Canadian corporation Corriente Resources. By 2010, when the concession was acquired by the Chinese consortium Ecuacorriente, nearly all families that lived in San Marcos, the main village of the parish, had left the area. San Marcos functioned as a sub-center after the town of Tundayme, being equipped with various social services such as a school, a church, a football square, a recreational park and water and electric infrastructures. These common facilities and the community houses were subsequently destroyed.
  - type: Group
    shortTitle: _video1
    longTitle: ''
    description: ''
    showInMenu: false
    id: _video1
    layout: default
    txtColor: Secondary
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
            content: '# DISPOSSESION BY DECEPTION'
          - type: VideoEmbed
            wideVideo: false
            videoUrl: https://player.vimeo.com/video/350133875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: Testimony of Carlos Cajamarca
  - type: Group
    shortTitle: _text3
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text3
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: The history of San Marcos is significant because the village eventually became the epicenter of local resistance against the Mirador mega-mine. At least two families refused to leave the site, and in doing so protected the village from complete destruction, salvaging the church and the school. On 12 May 2014, without warning or judicial order, police forces and security guards of Ecuacorriente occupied the village with heavy machinery and evicted the families, razing houses, the church and the school to the ground.
          - type: ImageBlock
            wideImage: false
            src: /uploads/expulsion-church.jpg
            alt: ''
            description: The church at the center of the San Marcos village before its destruction on May 2014.
          - type: Text
            hasDropCap: false
            content: |-
              In reaction to this brutal event, some of the evicted families formed the advocacy organization CASCOMI – the Cordillera del Cóndor Amazonian Community for Social Action, initiating a series of legal measures to claim reparations. In early 2015 a farmer transferred to CASCOMI the communal property of the last plot of land in San Marcos that was not under the company’s ownership, and families started to return and built a new village center in there. 

              The re-occupation of San Marcos marked a turning-point in the social mobilization against the Mirador mine, and so it was not allowed to last long. Months latter, on September 2015, state forces evicted the families and the new village was destroyed.
          - type: ImageBlock
            wideImage: false
            src: /uploads/expulsion-cascomi-sign.jpg
            alt: ''
            description: A sign held by the rights advocacy agency CASCOMI at the house of the Rosario Wari warning the employees of Ecuacorriente to stay out of the area.
  - type: Group
    shortTitle: _video2
    longTitle: ''
    description: ''
    showInMenu: false
    id: _video2
    layout: default
    txtColor: Secondary
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
            content: '# THE DESTRUCTION OF SAN MARCOS'
          - type: VideoEmbed
            wideVideo: false
            videoUrl: https://player.vimeo.com/video/351216210?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: Testimony of William Uyawari
  - type: Map
    shortTitle: _map2
    longTitle: ''
    description: ''
    showInMenu: false
    id: _map2
    txtColor: Primary
    bgColor: Secundary
    components: []
    columnAlign: left
    floatingText: false
  - type: Group
    shortTitle: _video3
    longTitle: ''
    description: ''
    showInMenu: false
    id: _video3
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: false
            content: '# THE VIOLENCE OF DISPLACEMENTS'
          - type: VideoEmbed
            wideVideo: false
            videoUrl: https://player.vimeo.com/video/351215838?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: Testimony by Rosa Shiminaicela
  - type: Group
    shortTitle: _text4
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text4
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Compare
            imageLeft: /uploads/smbefore-1581693790.png
            imageRight: /uploads/smafter-1581693796.png
            caption: Before-After satellite view of the village of San Marcos, destroyed in 2015.
          - type: Text
            hasDropCap: false
            content: |-
              Evictions were executed according to a similar pattern in that all of them were conducted by state forces and the  company's private security personnel; none of them presented judicial order; and all of them incurred in violations against the physical and psychological integrity of the community.

              They were also similar in the employment of disproportional force. Evictions involved the destruction of houses in front of the families, who lost their herds, crops, working tools, domestic utensils, cash savings and other property. The rubble of the house structures, together with personal belongings that were inside them, were buried on the same plot of land.  Testimonies of victims show that [evictions were conducted without any plan for re-location or sheltering](https://investigacionpsicosocial.files.wordpress.com/2017/02/herida-abierta-del-cc3b3ndor.pdf), leaving families in a vulnerable situation without housing.

              The systematic destruction of property shows that evictions had the intent of not only removing families from the area, but also terrorizing them, thereby preventing their return and eliminating social opposition against the mine. In that sense they were not only grave human rights violations, but also instruments of political repression.
  - type: Group
    shortTitle: ECOLOGICAL DESTRUCTION
    longTitle: ''
    description: ''
    showInMenu: true
    id: ECOLOGICAL DESTRUCTION
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/expulsion-dji_0446.jpeg
    overlay: dark
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: '10'
              tablet: '10'
              mobile: '10'
        column2:
          components:
            - type: Text
              hasDropCap: false
              content: |-
                # ECOLOGICAL DESTRUCTION

                deforestation and water contamination caused by Project Mirador
            - type: Spacer
              desktop: 500px
              tablet: 500px
              mobile: 500px
            - type: Text
              hasDropCap: false
              content: Sitting at the frontiers between the Andes and Amazonia, the Cordillera del Cóndor region functions as an “ecological bridge” between different highland and lowland climatic ecosystems. This condition gives these montane tropical forests a high degree of species diversity and endemism. The Cordillera del Cóndor is considered one of the planet’s most important yet least-known biological refuges. Given its “mega” dimensions, the Mirador mine will have widespread environmental impacts on these fragile ecological system as a whole.
            - type: Spacer
              desktop: 150px
              tablet: 150px
              mobile: 150px
  - type: Group
    shortTitle: _text5
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text5
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: |-
              According to botanist David Neil, Cordillera del Cóndor may harbor “the richest flora of any similar-sized area anywhere... and it almost certainly has one of the highest concentrations of vascular plant species yet unknown to science of any place on Earth.” The Cordillera del Cóndor is home to various endemic species, that is, animals and plants that are native to this territory and most probably only exist here. Moreover, this region constitutes an important refuge for species in risk of extinction across the continent, including the jaguar, the spider monkey and the Andean bear. 

              Beginning in 2019, the mega-mine Project Mirador will be explored for 30 years, [producing annual averages of 137 million pounds of cooper, 34.000 ounces of gold, and 394.000 ounces of silver](http://www.latinomineria.cl/reportajes/los-principales-proyectos-mineros-ecuador/). Geologically speaking, the Cordillera’s underground holds a giant mining belt, but studies also show that concentrations of metals in the regional soil are rather low. This means that for lucrative levels to be achieved, the extraction crater has to be very large and deep, processing huge quantities of earth on a daily basis. According to the plans presented by Ecuacorriente, [the Mirador mine will process up to 60.000 tons of stone per day](https://therightsofnature.org/the-case-for-rights-of-nature-in-face-of-the-mirador-open-pit-copper-mining-project/), the equivalent to 3.000 load trucks, consuming more than 200 liters of fresh water per second.
          - type: ImageBlock
            wideImage: false
            src: /uploads/expulsion-mirador_14_drone_panoramica.jpg
            alt: ''
            description: The Mirador mine will have widespread environmental impacts on these fragile ecological system as a whole.
  - type: Map
    shortTitle: _map3
    longTitle: ''
    description: ''
    showInMenu: false
    id: _map3
    txtColor: Primary
    bgColor: Secundary
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: view_1
    columnAlign: left
    floatingText: false
  - type: Group
    shortTitle: _text6
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text6
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: |-
              Open-pit extraction is an activity extremely harmful to the environment. Industrial scale mining operations require not only the exploration of vast tracts of land to be economically profitable, but also high consumption of water, energy and chemicals. These operations use tons of explosives and chemicals to extract metals from the soil, generating huge craters and large quantities of waste products that are highly toxic for land and rivers, and therefore also for local communities.

              The waste products of mining extraction, a kind of highly-toxic mud, are stored in huge tailing dams that are much larger than the crater itself. This mud contains a series of heavy metals that can contaminate freshwater sources through various ways, such as underground infiltration, rain acidification or through direct discharges into the environment that might be necessary to contain overflows or dam collapse. Thus the scale of the Mirador infrastructure involves risk of accidents that can have devastating impacts over the entire region beyond the mining concession area.
          - type: Spacer
            desktop: 100px
            tablet: 100px
            mobile: 50px
          - type: Text
            hasDropCap: false
            content: '##### **Contamination of water streams in the Tundayme River**'
          - type: Spacer
            desktop: 50px
            tablet: 50px
            mobile: 25px
          - type: Compare
            imageLeft: /uploads/toxicriver_before2.png
            imageRight: /uploads/toxicriver_after2.png
            caption: Before-after condition of the Quimi River during the opening of the Mirador mine (2014-2018). Streams and ground water sources in this region can no longer be used by villagers and farmers because they are contaminated with sediments from earth movements and erosions.
          - type: Text
            hasDropCap: false
            content: |-
              Mirador includes two large tailing dams. The smaller is under construction and is situated in the former site of the village of San Marcos. The second tailing pool, which has ten times the capacity, is situated above stream on the Tundayme River. 

              [The recent catastrophic collapses of the tailing dams in Mariana and Brumadinho in Brazil](https://oglobo.globo.com/brasil/rompimento-de-barragem-em-brumadinho-acontece-tres-anos-depois-de-tragedia-em-mariana-23401732), which released a deadly flow of toxic mud destroying communities and environments downstream, demonstrate the scale of the potential impact involved in mega-mining operations such as Project Mirador. Communities situated downstream the tailing pools – which include the Shuar centers of Etsa, Churubia, and Quimi; communities that live in Valle del Quimi; and the town center of Tundayme – are under threat of facing a similar devastating “disaster.” Furthermore, in a region so ecologically sensitive and important to global climate balance as Amazonia, such risk is not only local, but planetary.
          - type: HtmlEmbed
            wideHtml: false
            htmlCode: |-
              <div class="sketchfab-embed-wrapper">
                  <iframe title="A 3D model" width="800" height="480" src="https://sketchfab.com/models/91b29121fcf241dd80d13d92a4d157df/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
              </div>
            htmlCaption: ''
  - type: Group
    shortTitle: CULTURAL ERASURE
    longTitle: ''
    description: ''
    showInMenu: true
    id: CULTURAL ERASURE
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia:
      - type: backgroundImage
        imgSrc: /uploads/expulsion-tendetza-antun_16x9edit.jpg
    overlay: dark
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: '10'
              tablet: '10'
              mobile: '10'
        column2:
          components:
            - type: Text
              hasDropCap: false
              content: |-
                # Cultural Erasure

                destruction of indigenous archaeological heritage
            - type: Spacer
              desktop: 500px
              tablet: 500px
              mobile: 500px
            - type: Text
              hasDropCap: false
              content: In addition to the expulsion of local communities and massive deforestation, mega-mining operations are also destroying hundreds of indigenous archaeological sites in the Cordillera del Cóndor region. The geographic mapping of these sites shows that they form a very large and dense archaeological complex that extends throughout valleys of the Wawayme, Tundayme and Quimi rivers. This ancient heritage is now completly gone to open land for extraction.
            - type: Spacer
              desktop: 150px
              tablet: 150px
              mobile: 150px
  - type: Group
    shortTitle: _text7
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text7
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: false
        components:
          - type: Text
            hasDropCap: true
            content: Most of the archaeological sites found in the area of Project Mirador are characterized by anthropogenic earth-movements known as terraces. Terraces are flat planes cut on a slope that were used as platforms for crop cultivation. There are at least 900 terraces in the region, all of which are associated with the occurrence of ceramic and lithic fragments, and often with impressive pottery works such as funeral urns and sculpted objects that may have had ritual functions. This indicates that in the past this region was inhabited by settled cultures that produced substantial transformations in the regional landscape and nurtured sophisticated arts and crafts.
          - type: ImageBlock
            wideImage: false
            src: /uploads/arqueological-remains_03.jpg
            alt: ''
            description: A large-scale terraza-like structure at archaeological site Z6DIII-04T
          - type: Text
            hasDropCap: false
            content: Studies conducted as part of mining prospecting activities and environmental impact assessments demonstrate the existence of hundreds of archaeological sites distributed throughout the concession area. Given that scientific studies were not exhaustive neither systematic, but rather circumscribed to the context and interests of environmental impact assessments for mining operations, it is likely that this archaeological complex includes a much larger number of sites than already identified, extending over a much wider territory.
          - type: ImageBlock
            wideImage: false
            src: /uploads/arqueological-remains_01.jpg
            alt: ''
            description: Archaeological Site Z6DIII-098
  - type: Map
    shortTitle: _map4
    longTitle: ''
    description: ''
    showInMenu: false
    id: _map4
    txtColor: Primary
    bgColor: Secundary
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: view_1
    columnAlign: left
    floatingText: false
  - type: Group
    shortTitle: _video4
    longTitle: ''
    description: ''
    showInMenu: false
    id: _video4
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: false
            content: '# DISPOSSESSION OF HISTORY'
          - type: VideoEmbed
            wideVideo: false
            videoUrl: https://player.vimeo.com/video/350129967?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
            videoCaption: Testimony by Carlos Tendetza
  - type: Group
    shortTitle: _text8
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text8
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: At the time of this writing, probably all archaeological sites in the Mirador have been completely destroyed. The studies and reports we analyzed also show that some sites have gone through “archaeological rescuing,” and that all material collected remain in possession of Ecuacorriente or the Ecuadorian State. According to the INPC report mentioned above, these archaeological materials are stored in precarious conditions, “without technical standards,” in a deposit at the Socialization and Training Room of the Mirador project. Therefore they are under risk of being irreparably damaged and lost. Further, indigenous communities that inhabit the area, the original owners of these cultural heritage, have not been consulted regarding these archaeological sites nor do they have information about the destination of the rescued objects.
  - type: Map
    shortTitle: _map5
    longTitle: ''
    description: ''
    showInMenu: false
    id: _map5
    txtColor: Primary
    bgColor: Secundary
    components:
      - type: MapView
        txtColor: ''
        bgColor: ''
        mapView: view_1
    columnAlign: left
    floatingText: false
  - type: Group
    shortTitle: _text9
    longTitle: ''
    description: ''
    showInMenu: false
    id: _text9
    layout: default
    txtColor: Primary
    customTxtColor: ''
    bgColor: Secondary
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Column
        paddingTop: true
        paddingBottom: true
        components:
          - type: Text
            hasDropCap: true
            content: |-
              The implementation of the mega-mining Project Mirador in the Ecuadorian Amazon has been marked by systematic land and human rights violations of indigenous and peasant communities. Since early stages, project Mirador was conducted without prior, free and informed consultation of local communities, violating basic right principles and international protocols of which Ecuador is signatory. As local people organized and refused to leave their lands, the Ecuadorian state and the mining company Ecuacorriente joined forces to forcibly evict the population to open the area for the mega-mine.

               The implementation of Project Mirador was based on the removal of the entire community that lived in the valleys of the Wawayme, Quimi and Tundayme rivers. This investigation shows the spatial logics of a coordinated strategy of “land clearing” executed by state and private security forces aimed at depopulating the region. Evictions were conducted through destruction of houses, gardens and communal buildings. As such they consist in grave human rights violations and not isolated cases, revealing a pattern of violence directed against the entire community.

              Project Mirador also causes massive environmental destruction. Satellite images show that mining operations accelerated exponentially after the evictions of 2014-2017. Without the presence (and resistance) of the local community, deforestation spread throughout the region. Further, earth movements, erosions and the use of chemicals led to severe contamination of water streams.

              Numerous indigenous archaeological sites were destroyed by Project Mirador. Ignoring protocols of consultancy, archaeological rescue operations have been carried out without informing indigenous communities and official indigenous agencies in Ecuador, configuring a continuous act of cultural dispossession.

               Observed in relation to each other, the processes of expulsion and expropriation narrated here constitute multiple forms of displacement – of land, resources and culture. As such they should be repaired and remedied in multiple dimensions: social-economic, environmental and cultural.
  - type: Group
    shortTitle: DOWNLOAD REPORT
    longTitle: ''
    description: ''
    showInMenu: true
    id: DOWNLOAD REPORT
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: '10'
              tablet: '10'
              mobile: '10'
        column2:
          components:
            - type: Text
              hasDropCap: false
              content: |-
                # DOWNLOAD REPORT

                ###### [Expulsions Report in PDF](https://www.dropbox.com/s/t603x347361vs9n/20200302_Expulsion_Report_ENG.pdf?dl=0)
            - type: Spacer
              desktop: 200px
              tablet: 200px
              mobile: 100px
  - type: Group
    shortTitle: CREDITS
    longTitle: ''
    description: ''
    showInMenu: true
    id: CREDITS
    layout: default
    txtColor: Secondary
    customTxtColor: ''
    bgColor: Highlight
    customBgColor: ''
    backgroundMedia: []
    overlay: ''
    components:
      - type: Columns
        paddingTop: true
        paddingBottom: true
        invertOnMobile: false
        columnsAlign: 33-66
        column1:
          components:
            - type: Spacer
              desktop: '10'
              tablet: '10'
              mobile: '10'
        column2:
          components:
            - type: Text
              hasDropCap: false
              content: '# CREDITS'
            - type: Spacer
              desktop: 100px
              tablet: 100px
              mobile: 50px
            - type: Text
              hasDropCap: false
              content: |-
                This report was produced under commission of INREDH (Fundación Regional de Asesoría en Derechos Humanos) and CASCOMI – (Comunidad Amazónica de Acción Social Cordillera del Cóndor Mirador), within the framework of a protection action filed against the Ecuadorian State (Ministry of Mining, Ministry of the Interior, Ministry of the Environment, ARCOM - Agencia de Regulación y Control Minero) and the company Ecuacorriente for the violation of collective rights of the communities of the Cordillera del Cóndor. Our research counted on the invaluable collaboration of [Geografia Critica Ecuador](https://geografiacriticaecuador.org/) and [Acción Ecológica.](http://www.accionecologica.org/)

                **Realized by autonoma, MediaLab-UFRJ and Forensic Architecture**

                **Coordinator**: Paulo Tavares

                **Research and Mapping:** Adriano Belisário and Ana Altberg

                **Web Design:** Marlus Araújo

                **Video:** Camara Shuar
            - type: Spacer
              desktop: 100px
              tablet: 100px
              mobile: 50px
            - type: Text
              hasDropCap: false
              content: |-
                **RESEARCH SOURCES**

                Ecuador: La herida abierta del Cóndor Vulneración de derechos, Quito: El Chasqui Ediciones, 2017.

                CEDHU (Comisión Ecuménica de Derechos Humanos) and FIDH (Federación Internacional de Derechos Humanos). Intervención Minera a Gran Escala en Ecuador y Vulneración de Derechos Humanos. Quito: 2010.

                William Sacher and Michelle Báez, ENTRETELONES DE LA MEGAMINERÍA EN EL ECUADOR. Quito: Acción Ecológica, 2015.

                Gloria Chicaiza,El Enclave Minero de la Cordillera del Cóndor. Quito: Acción Ecológica, 2010.
---

