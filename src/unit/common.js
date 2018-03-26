
export default {

	// host: 'http://localhost:3000/admin',
	host: 'http://dzyadmin.uwinvape.com/admin',

	pageLimit:10,
	// 接口必带参数
	// urlParams:{
	// 	p:'web',
	// 	v: '1.0.0'
	// },
	
	 /**
     * 格式化金额
     * @param  {[number]}  number  [要格式化的数字]
     * @param  {[number]}  decimals  [保留几位小数]
     * @param  {[string]}  dec_point [小数点符号]
     * @param  {[string]} thousands_sep    [千分位符号]
     */
    numberFormat(number, decimals, dec_point, thousands_sep) {

        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function(n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.ceil(n * k) / k;
            };

        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        var re = /(-?\d+)(\d{3})/;
        while (re.test(s[0])) {
            s[0] = s[0].replace(re, "$1" + sep + "$2");
        }

        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    },

	formatDate(date,format){
	    var paddNum = function(num){
	      num += "";
	      return num.replace(/^(\d)$/,"0$1");
	    }
	    //指定格式字符
	    var cfg = {
	       yyyy : date.getFullYear() //年 : 4位
	      ,yy : date.getFullYear().toString().substring(2)//年 : 2位
	      ,M  : paddNum(date.getMonth() + 1)  //月 : 如果1位的时候不补0
	      ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
	      ,d  : paddNum(date.getDate())   //日 : 如果1位的时候不补0
	      ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
	      ,hh : paddNum(date.getHours())  //时
	      ,mm : paddNum(date.getMinutes()) //分
	      ,ss : paddNum(date.getSeconds()) //秒
	    }
	    format || (format = "yyyy-MM-dd hh:mm:ss");
	    return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
	  },
	/**
	 * count  秒数
	 * fmtStr 倒计时文字
	 * endStr 结束后文字
	 * eventTarget 倒计时对象
	 * countDown(60, '#{count} s', '重新获取')
	 */
	countDown(count, fmtStr, endStr, eventTarget) {

		var _self          = this,
			_count         = count  || 60,
			_fmtStr        = fmtStr || '#{count}s',
			_endStr        = endStr || '获取验证码',
			_interval      = null;

		eventTarget.innerHTML = _fmtStr.replace('#{count}', _count);

		_interval = setInterval(function() {
			_count--;
			if (_count == 0) {
				eventTarget.innerHTML = _endStr;
				eventTarget.classList.remove('disabled');
				clearInterval(_interval);
			} else {
				eventTarget.innerHTML = _fmtStr.replace('#{count}', _count);
			}
		}, 1000);

	},

	/**
	 * obj 当前对象
	 * cls 类名
	 */
	hasClass(obj, cls) {
		return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	},

	/*
	 * cookies 操作
	 */
	cookies : {
		//设置cookies
		set: function(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			} else var expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		},

		//获取cookies
		get: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		},

		//清除cookies
		erase: function(name) {
			this.set(name, "", -1);
		}
	},

	/*
	 * 滚动加载
	 */
	distanceScroll(distance,thisPage,totalPage,isLoad,callback,complete,type){

  		const vm = this;
		const scrollTop = document.body.scrollTop,
			  docHeight = document.body.clientHeight,
			  screenHeight = window.screen.availHeight;
		const differ = scrollTop > docHeight - screenHeight - distance;

		if (type != 1) {
			if (differ && isLoad && thisPage <= totalPage ) {
				callback();
			}else if(thisPage > totalPage){
				complete()
			}	
		}else if (type == 1) {
			if (differ && isLoad ) {
				callback();
			}
		}
		
	},

	/*
	 * 判断是否为微信内核
	 */
	isWeiXin(){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        return true;
	    }else{
	        return false;
	    }
	},

	 // 获取数组索引   
    getArrIndex(arr,str){
        var i = arr.length;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == str){
               return i;
            }
        }
    },

    // 将数组转成对象
    formatArr(arr){
    	var map = {};
        arr.forEach(function(item) {
            map[item._id] = item;
        });
        return map;
    }
  



	
}