export default {
  handlerData () {
    console.log('我是没有用的函数')
  },
  openNewPage () {
    window.open(this.url)
  }
}
export function test () {
  console.log('测试没有用到的函数')
}
export function testPR () {
  console.log('test_pr')
}
