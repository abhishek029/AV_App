export default{
    template: `
    <div class="columns large-6 large-offset-3">
                    <img src="images/logo.png">
                </div>
                <div id="loginForm">
                    <!-- <h1>Admin Login</h1> -->
                    <form action="admin_login.php" method="POST">
                        <label>
                            <input v-model="input.username" class="loginInput" type="text" name="username" value="" placeholder="Username" required>
                        </label>
                        <label>
                            <input v-model="input.password" class="loginInput" type="password" name="password" placeholder="Password" required>
                        </label>
                            <button v-on:click.prevent="login()" type="submit">Sign In</button>                
                    </form>
                </div>     
            </div>
    `,

    data(){
        return{
            input:{
                username: "",
                password: "",
            }
        }
    },

    methods:{
        login(){
            console.log('trying to login');

            if(this.input.username !="" && this.input.password !=""){

                    let url = `./admin/admin_login.php`;

                    const formData = new FormData();

                    formData.append("username", this.input.username);
                    formData.append("password", this.input.password);

                    fetch(url, {
                        method: 'POST',
                        body: formData
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(typeof data !== "object"){
                            console.log('login attempt failed');
                            //pop a toast notification
                            // let user know something broke
                            return;
                        }else{
                            this.$emit("authenticated", true);
                            this.$router.replace({name: "users"});
                        }
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                
            }else{
                console.log("username and password cannot be blank");
                
            }

        }
    }

}