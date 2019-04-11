<template>
    <section :class="$style['app-header']">
        <div :class="$style['g-wrap']">
            <div class="logo">
                我是头部
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" module>
    .app-header{
        background: #292e41;
        height: 62px;
        .g-wrap{
            width:1120px;
            margin:0 auto;
            height:100%;
        }
    }
</style>
