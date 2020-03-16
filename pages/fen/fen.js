Page({
  data: {
    flag: 0,
    currentTab: 0,
    arr:[]
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      flag: id
    });
  },
  catchTouchMove: function (res) {
    return false
  },
  onLoad: function (options) {
    var data = require("../data1.js")
    // console.log(data.data)
    var arr = data.data
    this.setData({
      arr
    })
    console.log(arr)
  }

})
