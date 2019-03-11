export default{
    props: ['currentuser'],

    template:`
    <div class="row">
    <input class="columns small-12 large-10 large-offset-1" id="search" type="text" placeholder="search for a movie, tv show and music">
    </div>

    <div id="kidContainer">
        <div> 
            <iframe id="id-frame" width="420" height="315" src="https://www.youtube.com/embed//BARjPuUN36Y?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>

    <div>
        <div class="kid-thumbnails row">
            <a href="javascript:cargarVideo('id-frame', 'BARjPuUN36Y');"><img class="columns large-2 large-offset-2 medium-4 small-6" src="images/kidPage_01.png"; onmouseover="this.src='images/kid_hover_01.png';" onmouseout="this.src='images/kidPage_01.png';"></a>
            <a href="javascript:cargarVideo('id-frame', 'iYue69KofvM');"><img class="columns large-2 large-offset-1 medium-4 small-6" src="images/kidPage_02.png"; onmouseover="this.src='images/kid_hover_02.png';" onmouseout="this.src='images/kidPage_02.png';"></a>
            <a href="javascript:cargarVideo('id-frame', 'ttw0YMmgMQU');"><img class="columns large-2 large-offset-1 medium-4 small-6" src="images/kidPage_03.png"; onmouseover="this.src='images/kid_hover_03.png';" onmouseout="this.src='images/kidPage_03.png';"></a>
        </div>

        <div class="kid-thumbnails row">
            <a href="javascript:cargarVideo('id-frame', 'P8oZKoE208E');"><img class="columns large-2 large-offset-2 medium-4 small-6" src="images/kidPage_04.png"; onmouseover="this.src='images/kid_hover_04.png';" onmouseout="this.src='images/kidPage_04.png';"></a>
            <a href="javascript:cargarVideo('id-frame', 'i75tpMJ7OeM');"><img class="columns large-2 large-offset-1 medium-4 small-6" src="images/kidPage_05.png"; onmouseover="this.src='images/kid_hover_05.png';" onmouseout="this.src='images/kidPage_05.png';"></a>
            <a href="javascript:cargarVideo('id-frame', 'LlgC5XNr7HU');"><img class="columns large-2 large-offset-1 medium-4 small-6" src="images/kidPage_06.png"; onmouseover="this.src='images/kid_hover_06.png';" onmouseout="this.src='images/kidPage_06.png';"></a>
        </div>
    </div>
    `,

    data(){
        return{
            activeMediaType: "video",

            // push first and push it into an active media reference
            currentMediaDetails: {},


            mediaTypes:[
                { iconClass: "fas fa-headphones", description: "audio"},
                { iconClass: "fas fa-film", description: "video"},
                { iconClass: "fas fa-tv", description: "televison"},
                
            ],

            retriveMedia: []
            }
        },
        created: function(){
            this.loadMedia("kids", "video");
        },
        methods:{
            loadMedia(filter, mediaType){
                if(this.activeMediaType !== mediaType){
                    this.activeMediaType = mediaType;
                }
            

                let url = `./admin/scripts/index.php?media=${mediaType}&&filter=${filter}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        this.retriveMedia = data;
                        this.currentMediaDetails = data[0];
                    })
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
    
}