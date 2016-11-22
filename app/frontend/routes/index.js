import Vue from "vue";
import VueRouter from "vue-router";
import {
    App,
    Info,
    infoNotice,
    noticeDetail,
    infoArticle,
    infoHome,
    editHome,
    articleDetail,
    addArticle,
    editArticle,
    Intro,
    introCourse,
    introTeacher,
    editCourse,
    editTeacher,
    Resource,
    resrcList,
    addResrc,
    Homework,
    hwList,
    hwDetail,
    quesDetail,
    addQues,
    editQues,
    correct,
    Forum,
    forumScetion,
    forumHome,
    Post,
    addPost,
    editPost,
    Group
} from "./components";

Vue.use(VueRouter);


const routes=[
    {
        path:'/',
        component:App,
        name:'App',
        redirect:'/info',
        children:[
            {
                path:'/info',
                name:'Info',
                component:Info,
                redirect:'/info/home',
                children:[
                    {
                        name:'home',
                        path:'/info/home',
                        component:infoHome
                    },
                    {
                        name:'editHome',
                        path:'/info/home/edit',
                        component:editHome
                    },
                    {
                        name:'notices',
                        path:'/info/notices',
                        component:infoNotice
                    },
                    {
                        name:'articles',
                        path:'/info/articles',
                        component:infoArticle
                    },
                ]
            },
            {
                name:'notice',
                path:'/info/notice/:nid',
                component:noticeDetail
            },
            {
                name:'articleDetail',
                path:'/info/article/:artId',
                component:articleDetail
            },
            {
                name:'addArticle',
                path:'/info/article/add',
                component:addArticle
            },
            {
                name:'editArticle',
                path:'/info/article/edit/:artId',
                component:editArticle
            },
            {
                name:'intro',
                path:'/intro',
                component:Intro,
                redirect:'/intro/course',
                children:[
                    {
                        name:'course',
                        path:'/intro/course',
                        component:introCourse
                    },
                    {
                        name:'teacher',
                        path:'/intro/teacher',
                        component:introTeacher
                    },
                    {
                        name:'editCourse',
                        path:'/intro/course/edit',
                        component:editCourse
                    },
                    {
                        name:'editTeacher',
                        path:'/intro/teacher/edit',
                        component:editTeacher
                    }
                ]
            },
            {
                name:'resource',
                path:'/resource',
                component:Resource,
                redirect:'/resource/list',
                children:[
                    {
                        name:'resrcList',
                        path:'/resource/list',
                        component:resrcList
                    },
                    {
                        name:'addResrc',
                        path:'/resource/add',
                        component:addResrc
                    }
                ]
            },
            {
                name:'homework',
                path:'/homework',
                component:Homework,
                redirect:'/homework/list/',
                children:[
                    {
                        name:'hwList',
                        path:'/homework/list/',
                        component:hwList
                    },
                    {
                        name:'hwDetail',
                        path:'/homework/:hwId/questions',
                        component:hwDetail
                    },
                    {
                        name:'quesDetail',
                        path:'/homework/:hwId/question/:quesId',
                        component:quesDetail
                    },
                    {
                        name:'addQues',
                        path:'/homework/:hwId/addques',
                        component:addQues
                    },
                    {
                        name:'editQues',
                        path:'/homework/:hwId/question/edit/:quesId',
                        component:editQues
                    },
                    {
                        name:'correct',
                        path:'/homework/:hwId/question/:quesId/correct/:sid',
                        component:correct
                    }
                ]
            },
            {
                name:'forum',
                path:'/forum',
                component:Forum,
                redirect:'/forum/home',
                children:[
                    {
                        name:'forumHome',
                        path:'/forum/home',
                        component:forumHome,
                    },
                    {
                        name:'section',
                        path:'/forum/:section',
                        component:forumScetion
                    },
                    {
                        name:'post',
                        path:'/forum/:section/post/:pid',
                        component:Post
                    },
                    {
                        name:'addPost',
                        path:'/forum/:section/add',
                        component:addPost
                    },
                    {
                        name:'editPost',
                        path:'/forum/:section/edit/:pid',
                        component:editPost
                    }
                ]
            },
            {
                name:'member',
                path:'/member',
                component:Group
            }
        ]
    },
]

const router=new VueRouter({
    routes
});

export default router;