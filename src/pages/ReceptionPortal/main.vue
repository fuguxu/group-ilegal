<template>
    <div class="clearfloat" :class="$style['reception-portal']">
        <div class="side-bar-content left">
            <SideBar></SideBar>
        </div>
        <div class="left" :class="$style['portal-content']">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SideBar from '../SideBar/main';
export default {
    data(){
        return {

        };
    },
    components:{
        SideBar
    }
};
</script>
<style lang="scss" module>
    .reception-portal{
        background: #f9f9f9;
        min-height: 600px;
    }
    .portal-content{
        background: #fff;
        min-height: 600px;
        width:calc(100% - 200px);
    }
</style>
