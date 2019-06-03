module.exports = {
  'todomvc': function (browser) {
    browser
      .url('http://localhost:9999/main.html#/r/reception_center')
      .waitForElementVisible('#app-reception', 1000)
      .assert.visible('.side-bar-content')
      .trigger('.el-input .el-input__inner', 'click')
      .end()
  }
}
