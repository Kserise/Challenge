const year = document.getElementById("year");
const time = document.getElementById("time");

function paintingDate(nowTime){
    year.innerText = `${nowTime.year}. ${nowTime.month}. ${nowTime.days}`;
    time.innerText = `${nowTime.hours} : ${nowTime.minute} : ${nowTime.second}`;
}

function nowDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = date.getDay();
    const hours = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    console.log(hours, minute, second);
    const nowTime = {
        year : year,
        month : month,
        days : days,
        hours : hours,
        minute : minute,
        second : second
    }
    paintingDate(nowTime);
}
nowDate();
setInterval(nowDate, 1000)