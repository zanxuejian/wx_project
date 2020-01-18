Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  data: {
    focus: false,
    inputValue: '',
    region:['湖北省','武汉市','洪山区'],
    date:'2020-01-01',
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value.length
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})