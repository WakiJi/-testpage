//			指定日期倒计时:距离高考还有多久

			var obj = document.getElementById("clock");

			var endTime = new Date();

			//设置月份5月1号，参数1十月份，月份是从0开始，参数2是天

			//不清楚的可以去看看 http://www.runoob.com/jsref/jsref-setmonth.html
                        endTime.setYear(2022);
			endTime.setMonth(5,7);

			//设置小时，分钟，秒，毫秒

			//不清楚的可以去看看 http://www.runoob.com/jsref/jsref-sethours.html

			endTime.setHours(8,0,0,0);

			//定时器一直重复执行

			//不清除的可以去看看 http://www.runoob.com/jsref/met-win-setinterval.html

			window.setInterval(myFun,1);

			function myFun(){

				var startTime = new Date();

//				思路很简单,用设置的未来时间5月1号减去现在的时间,然后转换成天数,小时,分钟,秒数

				var num = endTime.getTime()-startTime.getTime();

				var day = parseInt(num/1000/60/60/24);

				var hh = parseInt((num/1000/60/60/24 - day)*24)

				var mm = parseInt(((num/1000/60/60/24 - day)*24-hour)*60)

				var ss = parseInt((((num/1000/60/60/24 - day)*24-hour)*60-minute)*60)

				var ms = num % 1000
			}
