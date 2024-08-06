document.addEventListener('DOMContentLoaded',() => {
const tz = document.getElementById('tz')
const clock = document.getElementById('clock')
const cal = document.getElementById('cal')
const locale= dayjs.locale();

const time = dayjs().format('hh:mm:ss');
const date = dayjs().format('ddd, MMM MM YYYY')

tz.innerText = 'Nepal';
cal.innerText = date.toString()

setInterval(() =>{clock.innerText = time} , 3000)
})


