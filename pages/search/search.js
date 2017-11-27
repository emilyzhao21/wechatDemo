var subjectUtils = require("../../utils/subjectUtil.js");
var loading = require("../../utils/loading.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    movies:[]
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
  //点击跳转获取详情页面
  detail: function (e) {
    getApp().detail(e);
  },
  bindKeyInput: function(e){
    this.setData({inputVal:e.detail.value}); 
  },
  search:function(){
    var page = this;
    //当输入信息为空时，弹出模态框
    if(page.data.inputVal == ""){
      wx.showModal({
        title: '提示',
        content: '请输入查询关键字，如：加油',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    };
    loading.showLoading();
    wx.request({
      url: 'https://api.douban.com//v2/movie/search?q='+page.data.inputVal,
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        var subjects = res.data.subjects;
        subjectUtils.getSubjects(subjects);
        page.setData({movies:subjects,hideLoading:wx.hideLoading()});
      }
    })
  }
})