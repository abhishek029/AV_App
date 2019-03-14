import LoginComponent from '../js/modules/LoginComponent.js';
import UsersComponent from '../js/modules/UsersComponent.js';
import UserHomeComponent from '../js/modules/UserHomeComponent.js';
import ParentHomeComponent from '../js/modules/ParentHomeComponent.js';
import KidsHomeComponent from '../js/modules/KidsHomeComponent.js';

const routes = [
    { path: '/', redirect:{name: 'login'}},
    { path: '/login', name: 'login', component: LoginComponent},
    { path: '/users', name: 'users', component: UsersComponent},
    { path: '/usercomponent', name: 'home', component: UserHomeComponent },
    { path: '/parentcomponent', name: 'parent', component: ParentHomeComponent },
    { path: '/kidscomponent', name: 'kids', component: KidsHomeComponent }
]
const router = new VueRouter({
    routes
});
// then your vue instance

const vm = new Vue({
    data:{
        testmessage: "sup",

        mockAccount:{
            username: "abc",
            password: "123"
        }
    },

    methods:{
        calledOnParent(){
            console.log("This method lives in the main VM and wass cxalled a component");
        },
        setAuthenticated(status){
            this.authenticated = status;
        },
        logout(){
            this.$router.push({ path: "/login" });
            

        }
    },

    created: function(){
        console.log("Main Vue instance");
    },

    router:router
}).$mount("#app");

router.beforeEach((to, from, next)=>{
    console.log('router guard fired');

    if(vm.authenticated == false){
        next("/login");
    }else{
        next();
    }
});