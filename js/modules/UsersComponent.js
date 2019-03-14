import UserComponent from './UserComponent.js';

export default{
    template: `
    <div class="container">
        <div class="row" id="login">
        <nav class="">
        <ul class="row nav menu">
                <li class="col-4 nav-item">
                    <img class="col logo" src="images/logo.png" alt="logo">
                </li>
                                
                <li class="col-2 nav-item" v-on:click="logout()">
                    <i class="fas fa-power-off"></i>
                </li>                 
            </ul>      
    </nav>   
            <div class="col-sm-12">        
                <h1 class="text-left">{{message}}</h1>
            </div>
            
            <user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>
        </div>
    </div>
    `,
    created: function(){
        this.fetchAllUsers();
    },

    data(){
        return{
            message: "Select your Role:",

            userList: []
        }
    },

    methods: {
        fetchAllUsers(){
            let url = `./admin/scripts/users.php?allUsers=true`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.userList = data})
            .catch(function(error){
                console.error(error);
            });
        },

        logout(){
            this.$router.push({ path: "/login" });
            

        }
    },

    components: {
        user: UserComponent
    }
}