<template>
    <div >
        <el-button>下载</el-button>
        <el-input></el-input>
        <div class="test" :class="$style.tsr">
        <img style="height:42px;" src="../../img/welcome@2x.png" alt="">
        </div>
        <i class="icon el-icon-info"></i>
        <m-button></m-button>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },

  mounted () {
    // new Promise(r=>{
    //     r(true)
    // }).then(res=>{
    //     console.log(res)
    // })
    // console.log(Object.is({}, {}))
    // const arr= ['jack']
    // const arrv=arr.values();
    // for (let i of arrv){
    //     console.log(i)
    // }
    // console.log(arr.includes('jc'))
  },
  created () {
    console.log(333)
  }

}
</script>
<style lang="scss" module>
   .tsr{
       display: flex;
       align-items: center;
       background:url('../../img/evection.png') no-repeat center;
   }
</style>
<style scoped>
    .test{
        width:20px;
        height:20px;
        /* background:red; */
        transform: translate(45px);
    }
    .el-input >>>.el-input__inner{
        width:200px;
    }
</style>
