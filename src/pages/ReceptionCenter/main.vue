<template>
    <div >
        <el-button>下载</el-button>
        <el-input></el-input>
        <div class="test" :class="$style.tsr">

        </div>
        <i class="icon el-icon-info"></i>
    </div>
</template>
<script>

export default {
    data(){
        return {
          
        };
    },
    methods:{
      
    },
   
    mounted(){
        // console.log(Vue)
    },
    created(){
     
    },
   
};
</script>
<style lang="scss" module>
   .tsr{
       display: flex;
       align-items: center;
   }
</style>
<style scoped>
    .test{
        width:20px;
        height:20px;
        background:red;
        transform: translate(45px);
    }
    .el-input >>>.el-input__inner{
        width:200px;
    }
</style>