<template>
    <div>
        <div class="mainBox" v-loading.body="loading">
            <div class="leftBox fl">
                <el-menu
                        :default-active="currIndex"
                        class="el-menu-vertical-demo"
                        @select="selectPage">
                    <el-menu-item index="1">收件箱</el-menu-item>
                    <el-menu-item index="2">已发送</el-menu-item>
                    <el-menu-item index="3">发送信件</el-menu-item>
                </el-menu>
            </div>
            <div class="rightBox">
                <div class="main">
                    <div v-if="!toSend && !detailShow">
                        <div class="mailList">
                            <mail-item
                                    v-for="item in mailList"
                                    :key="item.mailId"
                                    :mail-id="item.mailId"
                                    :is-read="item.isRead"
                                    :sender="item.srcName||item.destName"
                                    :title="item.title"
                                    :datetime="item.time"
                            ></mail-item>
                        </div>
                        <el-pagination
                                small
                                layout="prev,pager,next"
                                :total="100"
                                class="fr"
                        ></el-pagination>
                    </div>
                    <div v-if="toSend && !detailShow">
                        <to-send :mail-form="mailForm"></to-send>
                    </div>

                    <!-- mail detail -->
                    <div v-if="detailShow">
                        <mail-detail :mail="currMail"></mail-detail>
                    </div>
                </div>
            </div>
            <div class="cl"></div>
        </div>
    </div>
</template>
<style scoped>
    .mainBox .leftBox{
        width:140px;
    }
    .mainBox .rightBox{
        padding-left:160px;

    }
    .mainBox .rightBox .main{
        width:100%;
        height:410px;
    }
    .mainBox .mailList{
        height:380px;
    }
    .list-item {
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-active {
        position:absolute;
        opacity: 0;
        transform: translateY(30px);
    }
</style>
<script>
    import mailItem from "./mailItem/mailItem.vue";
    import mailDetail from "./mailItem/mailDetail.vue";
    import toSend from "./toSend/toSend.vue";
    import {mapState} from "vuex";
    export default{
        data(){
            return{
                currIndex:'1',
                toSend:false,
            }
        },
        computed:{
            ...mapState({
                loading:state=>state.mail.loading,
                detailShow:state=>state.mail.detailShow,
                currMail:state=>state.mail.currMail,
                toSend:state=>state.mail.toSend,
                mailForm:state=>state.mail.mailForm
            }),
            mailList(){
                return this.$store.getters.mailList
            }
        },
        methods:{
            selectPage(index){
                switch(index){
                    case '1':
                        this.$store.dispatch('showToSend',false);
                        this.$store.dispatch('showMailDetail',false);
                        this.$store.dispatch('updateMailType',0);
                        break;
                    case '2':
                        this.$store.dispatch('showToSend',false);
                        this.$store.dispatch('showMailDetail',false);
                        this.$store.dispatch('updateMailType',1);
                        break;
                    case '3':
                        this.$store.dispatch('showMailDetail',false);
                        this.$store.dispatch('showToSend',true);
                        break;
                    default:break;
                }
            }
        },
        components:{
            mailItem,
            mailDetail,
            toSend
        }
    }
</script>
