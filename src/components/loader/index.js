

var Loader = require('./src/loader.vue');

Loader.install = function(Vue,aa){
	Vue.component(Loader.name, Loader);
}

module.exports = Loader;