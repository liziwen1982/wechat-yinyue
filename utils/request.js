// 发送 ajax 请求
/*
* 1.封装功能函数
*   1.功能点明确
*   2.函数内应该保留固定代码（静态的）
*   3.将动态的数据抽取成形参，由使用者根据自身的情况传入实参
*   4.一个良好的功能函数应该设置形参的默认值（ES6的形参默认值）
* 1.疯转功能组件
*   1.功能点明确
*   2.组件内应该保留固定代码
*   3.将动态的数据抽取成props参数，由使用者根据自身的情况以标签属性的形式动态传入props数据
*   4.一个良好的组件应该设置组件的必要性及数据类型
*     props {
        msg：{
          required:true,
          defult:默认值,
          type:string
        }
      }
*/
import config from './config'

export default (url, data={}, method="GET" ) => {
  return new Promise((resolve, rejest) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        cookie:wx.getStorageSync('cookie')?wx.getStorageSync('cookie').find(item => item.indexOf('cookie3') != -1):''
      },
      success: (res) => {
        if(data.isLogin){
          console.log("登录请求成功：", res)
          wx.setStorage({
            key: 'cookie',
            data: res.cookies
          })
        } 
          
        resolve(res.data)
      },
      fail : (err) => {
        //console.log("请求失败：", err)
        rejest(err)
      }  
    }
    )
  }

  )

}