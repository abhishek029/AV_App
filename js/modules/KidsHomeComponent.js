export default{
    props: ['currentuser'],

    template:`
    <div class="container">
            
        <div class="row"> 
            <nav class="">
                <ul class="row nav menu">
                        <li class="col-4 nav-item">
                            <img class="col logo" src="images/logo.png" alt="logo">
                        </li>
                        <li class="col-2 nav-item">
                            <router-link :to="{ path: 'users'}" class="nav-item nav-link">HOME</router-link>
                        </li>
                        <li class="col-2 nav-item">
                            <a class="nav-link" href="#" @click="loadMedia('kids','audio')">AUDIO</a>
                        </li>
                        <li class="col-2 nav-item">
                            <a class="nav-link" href="#" @click="loadMedia('kids','video')">VIDEO</a>
                        </li>                    
                        <li class="col-2 nav-item" v-on:click="logout()">
                            <i class="fas fa-power-off"></i>
                        </li>                 
                    </ul>      
            </nav>          
            
            <div class="col-sm-12"> 

                <div v-if="activeMediaType == 'video' && retriveMedia.length > 0" class="row">
                        <div class="col-sm-3">
                            <h3>{{currentMediaDetails.movies_title}}({{currentMediaDetails.movies_year}})</h3>
                            <p>{{currentMediaDetails.movies_storyline}}</p>
                        </div>

                        <div class="col-sm-9">
                            <iframe autoplay controls muted :src="currentMediaDetails.movies_trailer" class="fs-video col"></iframe>                       
                        </div>   
                        <h2 class="col-sm-12 moreList">More Video: </h2>             
                        <div v-for="media in retriveMedia" class="col-3 listItems">
                            <img @click="switchMedia(media)"  :src="'./images/video/' + media.movies_cover" alt="image">
                            <h3 class="text-center">{{media.movies_title}}</h3>
                        </div>
                    </div>
                </div>

                <div v-if="activeMediaType == 'audio' && retriveMedia.length > 0" class="row">
                        <div class="col-sm-3">
                            <img class="col-sm-12" :src="'images/audio/' + currentMediaDetails.audio_cover" alt="audio">
                        </div>
                        <div class="col-sm-9">
                            <h3>{{currentMediaDetails.audio_title}}({{currentMediaDetails.audio_year}})</h3>
                            <p>{{currentMediaDetails.audio_storyline}}</p>
                            <audio class="col-12" autoplay controls :src="'audio/' + currentMediaDetails.audio_src"/>
                        </div>
                        <h2 class="col-sm-12 moreList">More Audio: </h2>   
                        <div v-for="media in retriveMedia" class="col-3 listItems">
                            <img @click="switchMedia(media)" class="col-12"  :src="'./images/audio/' + media.audio_cover" alt="image">
                            <h3 class="text-center">{{media.audio_title}}</h3>
                        </div>
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
            this.loadMedia("kids", "video");
        },
        methods:{
            switchMedia(media){
                this.currentMediaDetails = media;
            },
            loadMedia(filter, mediaType){
                if(this.activeMediaType !== mediaType && mediaType != null){
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
            },
            
            logout(){
                this.$router.push({ path: "/login" });
                
    
            }
        }
    
}