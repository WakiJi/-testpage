// 获取DOM元素
function my$(id) {
    return document.getElementById(id);
}

// 每30秒刷新一次页面
function myrefresh() {
    window.location.reload();
}
setTimeout('myrefresh()', 30000); 

// 处理innerText和textContent的兼容性问题，设置标签内容
function setInnerText(element, content) {
    // 判断当前浏览器是否支持 innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 计算两个日期对象之间的时间间隔
 * @param {Date} start 开始日期对象
 * @param {Date} end 结束日期对象
 * @returns {object} 包含天、时、分、秒、毫秒的对象
 */
function getInterval(start, end) {
    // 两个日期相差的毫秒数
    let interval = end.getTime() - start.getTime();

    // 确保时间差为正值
    if (interval < 0) {
        interval = 0;
    }

    // 计算天数
    const day = Math.floor(interval / (1000 * 60 * 60 * 24));
    
    // 计算小时数（对总毫秒数取余，然后转换成小时）
    const hour = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // 计算分钟数
    const minute = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    
    // 计算秒数
    const second = Math.floor((interval % (1000 * 60)) / 1000);
    
    // 计算毫秒数
    const ms = interval % 1000;

    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        ms: ms
    };
}

// 示例用法：
// const startDate = new Date();
// const endDate = new Date(startDate.getTime() + 100000000); // 假设100000000毫秒后的时间
// const timeDifference = getInterval(startDate, endDate);
// console.log(timeDifference); // { day: ..., hour: ..., ... }