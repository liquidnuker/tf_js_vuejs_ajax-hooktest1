// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok
const Vue = require("./js/vendor/vue.min.js");
const url = "xyz";
const app1 = new Vue({
  el: "#app",
  data: {
    message: "message1",
    message2: "message2"
  },
  methods: {
    ajaxLoader: () => {
      console.log("ajaxloader init");
      app1.message = "ajax started";
      console.log(`"url:" ${url}`);
    }
  }
});

document.getElementById("demo").onclick = app1.ajaxLoader;

