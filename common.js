function my$(id) {

  return document.getElementById(id);

}

function myrefresh(){

window.location.reload();

}

setTimeout('myrefresh()',100000); 

// 处理innerText和textContent的兼容性问题

// 设置标签之间的内容

function setInnerText(element, content) {

  // 判断当前浏览器是否支持 innerText

  if (typeof element.innerText === 'string') {

    element.innerText = content;

  } else {

    element.textContent = content;

  }

}

 

 

function getInterval(start, end) {

  // 两个日期对象，相差的毫秒数

  var interval = end - start;

  // 求 相差的天数/小时数/分钟数/秒数

  var day, hour, minute, second;

 

  // 两个日期对象，相差的秒数

  // interval = interval / 1000;

  interval =interval / 1000;

 


				var day = parseInt(interval/60/60/24);

				var hour = parseInt((interval/60/60/24 - day)*24)

				var minute = parseInt(((interval/60/60/24 - day)*24-hour)*60)

				var second = parseInt((((interval/60/60/24 - day)*24-hour)*60-minute)*60)

				var ms = interval % 1000

  return {

    day: day,

    hour: hour,

    minute: minute,

    second: second

  }

}
