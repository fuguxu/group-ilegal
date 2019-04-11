<template>
    <section :class="$style['app-footer']">
        <div :class="$style['g-wrap']">
            <div class="logo">
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
    .app-footer{
        background: #292e41;
        height: 62px;
        .g-wrap{
            width:1120px;
            margin:0 auto;
            height:100%;
        }
    }
</style>
