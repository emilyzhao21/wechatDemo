var subjectUtils = require("../../utils/subjectUtil.js");
var loading = require("../../utils/loading.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [] //定义获取的movies数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    loading.showLoading();
    this.loadMovie();//调用读取数据的函数
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
  loadMovie: function () {
    var page = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      header: {
        'content-type': 'json'
      },
      method: 'GET',
      success: function (res) {
        var subjects = res.data.subjects;
        subjectUtils.getSubjects(subjects);
        //在全局定义一个hideLoading方法，一旦数据加载完成，隐藏loading
        page.setData({ movies: subjects, hideLoading: wx.hideLoading() });
      }
    })
  }
})