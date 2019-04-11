<template>
    <div id="app-reception" class="beauty-scroll-bar">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'hello world'
        }
    }
}
</script>
<style lang="scss" scoped>
    #app-reception{
        // height: 100%;
    }
</style>
