// pages/personal/personal.js

let startY = 0; // 手指起始的坐标
let moveY = 0;  // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coveTransition: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  handleTouchStart(event) {
    console.log('start')
    startY = event.touches[0].clientY;

    this.setData({
      coverTransition: ''
    })
  },

  handleTouchMove(event) {
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    console.log(moveDistance);

    if(moveDistance <= 0 ){
      return;
    }
    if(moveDistance >= 80){
      moveDistance = 80;
    }
    // 动态更新 coverTransform 的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`,
    })
  },

  handleTouchEnd() {
    console.log('end')
    // 动态更新 coverTransform 的状态值
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coverTransition: 'transform 1s linear'
    })
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