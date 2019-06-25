var newsData = require("../../data/newdata.js")
// pages/rt/rt.js
var app = getApp()
Page({

  /**
   * 页面的初始数�?
   */
  data: {
      "indicaaator_dots":true,
      "autoplay":true,
      "publishericon": "../../icons/user1.png",
      "publishername":"张三",
      "pdate":"2019/6/24",
      "title":null,
      "intro":"明天18：00前去丰巢11号取快递。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(newsData);
    this.setData({
      useData:newsData.initData
    })
    this.setData({
      title: options.input_title
    })
  },

  /**
   * 生命周期函数--监听页面初�?�渲染完�?
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的�?�理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分�?
   */
  onShareAppMessage: function () {

  }
})