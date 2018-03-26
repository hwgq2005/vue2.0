var Toast = require('./components/toast');
var Loader = require('./components/loader');

var install = function(Vue) {

	if (install.installed) return;
	
	Vue.component(Loader.name, Loader);
	Vue.$toast = Vue.prototype.$toast = Toast;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports ={
	Toast:Toast,
	Loader:Loader
};