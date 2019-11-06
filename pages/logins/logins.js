// pages/logins/logins.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义初始化变量值
    user_name: '',
    user_pwds: '',
    t1: '',
    t2: '',
    ans: '',
    dayStyle: [
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' }
    ]
  },
  //获取用户名的值并将值赋给最先定义的初始化变量
  input_name: function (e) {
    this.setData({ user_name: e.detail.value })
  },
  //跟上面一样
  input_pwds: function (e) {
    this.setData({ user_pwds: e.detail.value })
  },
  input_t1: function (e) {
    this.setData({ t1: e.detail.value })
  },
  //跟上面一样
  input_t2: function (e) {
    this.setData({ t2: e.detail.value })
  },



  /**
   * 点击登录按钮时间
   */
  btns: function () {
    console.log("登录获取的参数：" + this.data.user_name + "," + this.data.user_pwds)
    var that = this;
    wx.request({  //记得这个URL如果你没有域名的话  不改东西的话是会报错的
      url: 'http://localhost:8080/login',  //请求的URL
      method: 'POST',                                        //提交方式
      header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求的
      data: {
        'user_name': that.data.user_name,
        'user_pwds': that.data.user_pwds
      },  //请求参数
      success: function (res) {   //接受后台的回调函数
        var resData = res.data;
        console.log("???:" + resData);
        if (resData == true) {
          wx.showToast({    //这是微信小程序里面自带的成功弹窗
            title: '登录成功',  //弹窗里面的内容
            icon: 'success',  //图标
            duration: 15000,   //弹窗延迟的时间
            success: function () {
              wx.navigateTo({  //保留当前页面，跳转到应用内的某个页面
                url: '../index/index',   //跳转的页面
              })
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000,
          })
        }
      }
    })
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})