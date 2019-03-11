export default{
    props: ['currentuser'],

    template:`
    <div class="row">
        <input class="columns small-12 large-10 large-offset-1" id="search" type="text" placeholder="search for a movie, tv show and music">
    </div>

<div>
    <div id="banner">
        <img :src="banner" class="columns large-offset-1 large-10 small-12 medium-12" >
    </div>
    `,

    data(){
        return{
            banner : 'images/banner.jpg',
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
            this.loadMedia("parents", "video");
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
                        this.retriveMedia = data[0];
                        this.currentMediaDetails = data[0];
                    })
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
    
}