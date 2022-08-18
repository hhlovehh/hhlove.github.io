function startTime() {
    var today=new Date();//定义日期对象
    var yyyy = today.getFullYear();//通过日期对象的getFullYear()方法返回年
    var MM = today.getMonth()+1;//通过日期对象的getMonth()方法返回月
    var dd = today.getDate();//通过日期对象的getDate()方法返回日
    var hh=today.getHours();//通过日期对象的getHours方法返回小时
    var mm=today.getMinutes();//通过日期对象的getMinutes方法返回分钟
    var ss=today.getSeconds();//通过日期对象的getSeconds方法返回秒
    var mmss=today.getMilliseconds();
    // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09
    MM=checkTime(MM);
    dd=checkTime(dd);
    mm=checkTime(mm);
    ss=checkTime(ss);
    document.getElementById('year').innerHTML=yyyy;
    document.getElementById('month').innerHTML=MM;
    document.getElementById('day').innerHTML=dd;
    document.getElementById('hour').innerHTML=hh;
    document.getElementById('minute').innerHTML=mm;
    document.getElementById('second').innerHTML=ss;
    document.getElementById('mss').innerHTML=mmss;
    document.getElementById('s2').innerHTML=yyyy+"-"+MM +"-"+ dd;
    setTimeout('startTime()',1);//每一秒中重新加载startTime()方法
}
function checkTime(i) {
    if (i<10){
        i="0" + i;
    }
    return i;
}