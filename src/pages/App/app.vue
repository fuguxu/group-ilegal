<template>
    <div id="app-main">
        <headerBar></headerBar>
        <section :class="$style['main-container']">
            <router-view></router-view>
        </section>
        <footerBar></footerBar>
    </div>
</template>
<script>
import headerBar from '../HeaderBar/main';
import footerBar from '../FooterBar/main';
export default {
    data(){
        return {
           
        }
    },
    components:{
        headerBar,
        footerBar
    }
}
</script>
<style lang="scss" module>
    #app-main{
        // height:100%;
    }
    .main-container{
        width:1120px;
        margin:30px auto;
        min-height: 600px;
        background: #fff;
    }
</style>
