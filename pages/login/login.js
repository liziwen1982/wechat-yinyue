/**
  作者: Created by zhiyongzaixian
  说明: 登录流程
  1. 收集表单项数据
  2. 前端验证
    1) 验证用户信息(账号，密码)是否合法
    2) 前端验证不通过就提示用户，不需要发请求给后端
    3) 前端验证通过了，发请求(携带账号, 密码)给服务器端
  3. 后端验证
    1) 验证用户是否存在
    2) 用户不存在直接返回，告诉前端用户不存在
    3) 用户存在需要验证密码是否正确
    4) 密码不正确返回给前端提示密码不正确
    5) 密码正确返回给前端数据，提示用户登录成功(会携带用户的相关信息)
*/

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 表单项内容发生改变的回调
  handleInput(event){    
    // let type = event.currentTarget.id; // id传值
    let type = event.currentTarget.dataset.type;
    console.log(type, event.detail.value)
    this.setData({
      [type]: event.detail.value
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