<template>
    <div>
        <el-tabs type="card" @tab-click="handleClick" :active-name="currIndex">
            <el-tab-pane label="课程介绍"></el-tab-pane>
            <el-tab-pane label="教师介绍"></el-tab-pane>
        </el-tabs>
        <el-button type="success" class="fr" icon="edit" @click="goEdit"></el-button>
        <div class="infoBox">
            <div>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
    </div>
</template>
<style scoped>
    .el-tabs{
        width:100%;
    }
    .el-button--success{
        position:relative;
        margin-top:-62px;
        z-index:1;
    }
    .infoBox{
        padding:0px 20px;
    }
    .infoBox>div{
        position:relative;
    }
</style>
<script>
    import router from "../../routes";
    export default{
        data(){
            return{
                currIndex:""
            }
        },
        created(){
            //initial tabs' active item
            let route=this.$route.name;
            if(route=='course') this.currIndex="1";
            else if(route=='teacher') this.currIndex="2";
        },
        methods:{
            handleClick(tabs){
                switch(tabs.index){
                    case "1":
                        router.push({name:'course'});
                        break;
                    case "2":
                        router.push({name:'teacher'});
                        break;
                    default:break;
                }
            },
            goEdit(){
                let route=this.$route.name;
                switch(route){
                    case 'course':
                        router.push({name:'editCourse'});
                        break;
                    case 'teacher':
                        router.push({name:'editTeacher'});
                        break;
                    default:break;
                }
            }
        }
    }
</script>
