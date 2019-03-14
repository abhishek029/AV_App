import UserComponent from './UserComponent.js';

export default{
    template: `
    <div class="container">
        <div class="row" id="login">
        
            <div class="col-sm-12">   
                <img class="col-4 text-center logo" src="images/logo.png" alt="logo">         
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
        }
    },

    components: {
        user: UserComponent
    }
}