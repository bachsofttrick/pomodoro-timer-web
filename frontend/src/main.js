import Vue from 'vue'
import App from './App.vue'

Vue.filter('two_digits', function (value) {
  console.log(value);
  if(value.toString().length <= 1)
  {
    return "0"+value.toString();
  }
  return value.toString();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
