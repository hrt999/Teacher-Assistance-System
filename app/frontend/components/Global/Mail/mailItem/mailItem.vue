<template>
    <div>
        <div class="mail" @click="goDetail(mailId)">
            <el-col :span="2" v-if="isRead!=undefined">
                <el-tag v-if="isRead==1" close-transition="true">已读</el-tag>
                <el-tag v-if="isRead==0" close-transition="true" class="unRead">未读</el-tag>
            </el-col>
            <el-col :span="3" v-else>
                <el-tag class="success" close-transition="true">发送成功</el-tag>
            </el-col>
            <el-col :span="5"><div class="sender" :title="sender">{{sender}}</div></el-col>

            <el-col :span="11" v-if="isRead!=undefined">
                <div class="title" :title="title">{{title}}</div>
            </el-col>
            <el-col :span="10" v-else>
                <div class="title" :title="title">{{title}}</div>
            </el-col>

            <el-col :span="6">
                <div class="datetime">{{datetime}}</div>
            </el-col>
        </div>
    </div>
</template>
<style scoped>
    .mail{
        margin-top:1px;
        height:40px;
        line-height:40px;
        cursor:pointer;
        border-bottom:1px solid #E5E9F2;
        -webkit-transition: border-color 0.3s;
        -moz-transition: border-color 0.3s;
        -ms-transition: border-color 0.3s;
        -o-transition: border-color 0.3s;
        transition: border-color 0.3s;
    }
    .mail:hover{
        border-color:#C0CCDA;
    }
    .mail div{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        padding:0 5px;
    }
    .mail .unRead{
        background-color: #58B7FF;
        border-color:#58B7FF;
    }
    .mail .success{
        background-color: #13CE66;
        border-color:#13CE66;
    }
    .mail .datetime{
        font-size:12px;
    }
</style>
<script>
    export default{
        props:{
            mailId:[String,Number],
            isRead:Boolean,
            sender:String,
            title:String,
            datetime:String
        },
        methods:{
            goDetail(mailId){
                this.$store.dispatch('getCurrMail',mailId)
            }
        }
    }
</script>
