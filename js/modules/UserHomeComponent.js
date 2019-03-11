export default{
    props: ['currentuser'],

    template:`
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1>You're on the Guest's home page and we don't have anything for you right now!</h1>
                    
                    <img :src="'../images/' + retriveMedia.movies_cover" alt="image">
                </div>
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
            this.loadMedia("guest", "video");
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