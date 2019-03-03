// pages/photos/photos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551548050297&di=b3cd3ecbb8f13e819dad93d576434854&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201511%2F08%2F20151108153116_GKXHW.thumb.700_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551548050297&di=f33ed295d85c426d7cff9f4e2bb7fbe2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F09%2F20150309091500_KFPZx.thumb.700_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551548050296&di=4a433b8f299ec9abaf231d2e64a57139&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F07%2F20150307081750_J8ztH.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551548050295&di=c36fdf818bba63ef626cbfac7e0fe74a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F27%2F20151127205144_raYjU.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551548050293&di=68c7dea9d0b80331c4f58bb71bc67874&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fea4ecc539c0a5c927daf4e539b24f066.jpeg'
    ]
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
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