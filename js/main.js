(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            parentTitle : "Parent Section",
            kidsTitle : "kids Section",
            moviedata : [],    
            kidsmoviedata : [],        

            // movieid : "01",
            // movietitle : "title",
            // moviedescription : "description",
            // movielength : "00:00:00",
            // moviethumb : "image.jpg",
             movievideo : "video.mp4"

        },

        created : function() {
            console.log("fetch all movies called");
            this.fetchAllMovies();
            
        },

        methods : {

            //get all movie record
            fetchAllMovies() {
         
                console.log("fetch function");
                
                fetch(`./includes/index.php`) // pass in the one or many query
                .then(res => res.json())
                .then(data => {                   
                       
                        //const {parentId, parentTitle, parentDesc, parentLength, parentThumb, parentVideo} = data[0];
                        console.log("all data came");
                        console.log(data);
                        this.moviedata = data[0];
                        this.kidsmoviedata = data[1];
                    
                })
                .catch(function(error) {
                    console.log(error);
                });

              
            }
        }
    });
})();