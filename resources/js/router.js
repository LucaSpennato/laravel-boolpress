// importiamo il necessario
// import App from './views/App.vue';
// import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue.use(VueRouter);

// ! importiamo le pages alle quali daremo una rotta 
// ! Attenzione all'ordine, le rotte cambiano anche in base a questo! Potrebbero non essere trovate perchè sovrascritte da altro!
import HomeComponent from './pages/HomeComponent';
import PostsComponent from './pages/PostsComponent';

import SearchPostsPage from './pages/SearchPostsPage';

import TagsComponent from './pages/TagsComponent';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';

// ! Creiamo un'istanza di vueRouter
const router = new VueRouter({

    // ? mode: 'history' toglie lì# dallo uri
    mode: 'history',

    // ? definiamo le rotte!
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeComponent,
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsComponent,
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsComponent,
        },
        {
            path: '/posts/search/',
            name: 'searchtitle',
            component: SearchPostsPage,
        },
        {
            path: '/post/:id',
            name: 'singlepost',
            component: SinglePost,
            // ! passa i dati di sessione senza usare this.$route.params.id
            props: true,
        },
        {
            path: '/tags*',
            redirect: '/tags'
        },
        {
            // ? gli diamo tutti i path non usati, va bene anche path: '*', o più specifico path: '/user-*
            path: '/:catchAll(.*)' ,
            name: 'notfound',
            component: NotFound,
        },

    ],
});

// ! esportiamo router e lo richiamiamo in front.js
export default router;