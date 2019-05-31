const context = require.context('./packages', true, /index\.js$/)
const components = {}

context.keys().forEach((comp) => {
  let compt = context(comp).default
  components[compt.name] = compt
})

const install = function (Vue) {
  for (var compName in components) {
    Vue.component(compName, components[compName])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
