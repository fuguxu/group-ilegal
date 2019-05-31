module.exports = {
  'todomvc': function (browser) {
    browser
      .url('http://localhost:9999/main.html#/r/reception_center')
      .waitForElementVisible('#app-reception', 1000)
      .assert.visible('.side-bar-content')
      .end()
  }
}
