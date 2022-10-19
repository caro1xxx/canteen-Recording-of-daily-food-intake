// components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    expandState:{
      state:false,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    expand(){
      this.setData({
        expandState:{
          state:true,
        }
      })
    },
    pickUp(){
      this.setData({
        expandState:{
          state:false,
        }
      })
    }
  }
})
