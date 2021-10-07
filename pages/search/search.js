// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inpVal:"",
        result:[],
        city:""
    },
    inp_event:function(event){
            var val = event.detail.value;
            this.setData({
                inpVal:val
            })
           // console.log(this.data.inpVal,'1111')
    },
    tap_event:function()
    {
            console.log("test")
            if(this.data.inpVal.length == 0)
            {
                return;
            }
            //console.log("输入框的值",this.data.inpVal);
            var city = this.data.inpVal;
            this.getWeatherData(city);
    },
    getWeatherData:function(value)
    {
        var that = this;
        wx.request(
            {
                url: 'https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=81612572&appsecret=ke4fs9Yz',
                data:{
                    appid: "81612572",
                    appsecret: "ke4fs9Yz ",
                    city: value
                },
                success: function (res) {
                   console.log(res)
                  that.setData({
                      city:res.data.city,
                    result:res.data.data
                })
                console.log(that.data.result)
            },
                fail:function(err){
                    console.log(err,'失败')
                }
            })
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //this.test()
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