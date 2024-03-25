import repquest from "../utils/request"

// pages/index.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
/*     wx.request({
      url: "http://localhost:3000/banner",
      data: { type: 2},
      success: (res) => { 
        console.log("请求成功：", res)
      },
      fail : (err) => {
        console.log("请求失败：", err)
      }
    }
    ) */

    let result = await repquest('/banner', {type:2})
    console.log('异步结果：', result)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})