export default{
    template: `
    <div class="columns large-6 large-offset-3">
                    <img src="images/logo.png">
                </div>
                <div id="loginForm">
                    <!-- <h1>Admin Login</h1> -->
                    <form action="admin_login.php" method="POST">
                        <label>
                            <input class="loginInput columns small-12" type="text" name="username" value="" placeholder="Username">
                        </label>
                        <label>
                            <input class="loginInput columns small-12" type="password" name="password" placeholder="Password">
                        </label>
                        <div class="row">     
                            <button class="columns medium-offset-5 large-offset-5 " type="submit" id="signIn">Sign In</button>                
                        </div>        
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