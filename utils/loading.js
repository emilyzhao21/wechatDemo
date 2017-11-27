//加载中
function showLoading() {
  wx.showLoading({
    title: "加载中",
    mask: true
  })
};
module.exports = {
  showLoading: showLoading
}