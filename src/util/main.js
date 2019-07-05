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

let ob
function log (target, key, descriptor) {
  console.log(target, key, descriptor)
  var oldValue = descriptor.value
  console.log(oldValue)
  // 修改 descriptor属性
  descriptor.value = function () {
    console.log(`${key}`, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}
class Math1 {
  constructor (a, b) {
    this.a = a
    this.b = b
    this.age = 12
  }

  @log
  add (a, b) {
    return a + b
  }
}

ob = new Math1()
console.log(ob)
// ob.add(1, 2)
