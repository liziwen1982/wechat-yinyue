// pages/video/video.js
import request from "../../utils/request"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 导航标签数据
    videoList: [], // 某个导航标识的数据
    navId: '' // 导航标识
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getVideoGroupList()
  },

  // 获取导航标签数据
  async getVideoGroupList(){
    let videoGroupListData = await request('/video/group/list')
    this.setData({
      videoGroupList : videoGroupListData.data.slice(0, 14),
      navId:videoGroupListData.data[0].id
    })

    this.getVideoList(this.data.navId)
  },

  // 获取某个视频组的视频列表
  async getVideoList(navId){
    let videoListData = await request('/video/group', {id:navId})
    let index = 0
    let videoList = videoListData.map(item => {item.id = index++;return item;})
    this.setData({
      videoList : videoList
    })
  },

  // 点击切换导航的回调
  changeNav(event){
    //let navId = event.currentTarget.id;
    let navId = event.currentTarget.dataset.id;
    //console.log(event.currentTarget.dataset)
    //console.log(typeof navId)
    this.setData({
      navId:navId
    })

    this.getVideoList(navId)
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