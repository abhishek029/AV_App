export default{
    template: `
    <div class="jumbotron roku-jumbotron">
        <div class="display-4 text-center head"><img class="logo" src="images/logo.png" alt="logo"></div>
           
        <form>
            <div class="form-row align-items-center">
                <div class="col-sm-12  my-1">
                    <label class="sr-only" for="inlineFormInputName">Name</label>
                    <input v-model="input.username" type="text" class="form-control login" id="inlineFormInputName" placeholder="username" required>
                </div>

                <div class="col-sm-12 my-1">
                    <label class="sr-only" for="inlineFormPassword">Name</label>
                    <input v-model="input.password" type="password" class="form-control login" id="inlineFormPassword" placeholder="password" required>
                </div>

                <div class="col-sm-12 my-1">
                    <button v-on:click.prevent="login()" type="submit" class="btn col-12 login btn-primary">Sign In</button>
                </div>
            </div>
        </form>            
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

        },

        logout(){
            this.$router.push({ path: "/login" });
            

        }
    }

}