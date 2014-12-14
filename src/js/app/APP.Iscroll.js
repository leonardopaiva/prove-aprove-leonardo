var APP = APP || {};

APP.Iscroll = {
  _objVariables: null,
  _iscrollSelector: ".iscroll-container",
  _objIscroll: null,

  init: function () {
    //this.bindEvents();
    this.startIscroll();
  },

  bindEvents: function(){
    var that = this;
  },

  startIscroll: function(){
    if($(this._iscrollSelector).get(0)){
      console.dir(this._objIscroll);
      this._objIscroll = new IScroll(this._iscrollSelector);
      console.dir(this._objIscroll);
    }
  }
};
