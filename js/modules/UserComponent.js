export default {
    props: ['liveuser'],

    template: `
        <div class="col-xs-12 col-am-6 col-md-4 mx-auto">
            <div class="card rounded" @click="navToUserHome(liveuser.access)">
                <div class="card-body text-center">
                 <!-- <pre>{{ liveuser }}</pre>   -->
                    <img :src="'images/' + liveuser.avatar" class="rounded-circle img-fluid">
                    <p>{{liveuser.fname}}</p>
                </div>    
            </div>
        </div>
    `,
    created: function(){
       
    },

    methods:{
        navToUserHome(accessnumber){
            console.log(accessnumber);
            if(accessnumber>'4'){
                console.log("parent");
                
                this.$router.push({ name: "parent", params: { currentuser: this.liveuser}});
            }   
            else if(accessnumber>'2'){
                console.log("kid");

                this.$router.push({ name: "kids", params: { currentuser: this.liveuser}});
            }else{
                console.log("Guest cannot access");
                this.$router.push({ name: "home", params: { currentuser: this.liveuser}});
            }
        }
    }
}