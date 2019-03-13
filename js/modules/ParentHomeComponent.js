export default{
    props: ['currentuser'],

    template:`
    <div class="container">
    
    
    <div class="row">   
        <nav class="col">
            <ul class="nav menu">
                    <li class="nav-item">
                        <router-link :to="{ path: 'users'}" class="nav-item nav-link">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="loadMedia('parents','audio')">AUDIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="loadMedia('parents','video')">VIDEO</a>
                    </li>                    
                    <li class="nav-item" v-on:click="logout()">
                        <i class="fas fa-power-off"></i>
                    </li>                 
                </ul>      
        </nav> 

        <div class="col-sm-12"> 

            <div v-if="activeMediaType == 'video' && retriveMedia.length > 0" class="row">
                <div class="col-sm-12">
                    <video autoplay controls muted :src="'video/'+currentMediaDetails.movies_trailer" class="fs-video col"></video>
                </div>                

                <img v-for="media in retriveMedia" @click="switchMedia(media)" class="col-2 img-circle" :src="'./images/video/' + media.movies_cover" alt="image">
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

                <img v-for="media in retriveMedia" @click="switchMedia(media)" class="col-2 img-circle" :src="'./images/audio/' + media.audio_cover" alt="image">
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
            this.loadMedia("parents", "video");
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
                        this.retriveMedia = data;
                        this.currentMediaDetails = data[0];
                    })
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
    
}