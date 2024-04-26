"use strict"


const currentMoment = moment().format('YYYYMM') // 현재 날짜와 시간


const date = new Date();


const startDay = moment(currentMoment).startOf('month').format('YYYY-MM-DD')
const endDay = moment(currentMoment).endOf('month').format('YYYY-MM-DD')

console.log(moment(endDay).day())

// 첫번째 일과 마지막 일을 출력한다. 
function regexNumber(str){
  var regex = /[^0-9]/g;
  var number = str.replace(regex, "")
  var result = number.substring(6,8)
  return result
}
console.log(regexNumber(startDay), regexNumber(endDay))

console.log(startDay, endDay)

const renderCalender = ()=>{
  var currentYear = date.getFullYear(); // 현재 년도
  var currentMonth = date.getMonth() // 현재 월 (0부터 시작하므로 +1 해줌)

  document.querySelector(".month-year").textContent= `${currentYear}년 ${currentMonth + 1}월`
}

renderCalender();

const prevMonth = ()=>{
  date.setMonth(date.getMonth()-1)

  
  renderCalender();
}

const nextMonth = ()=>{
  date.setMonth(date.getMonth()+1)
  renderCalender();
}

/**data-set을 안쓰고 ejs 파일 내의 수동으로 작성한 td tr 모두 유지한다.
 * let array = []
 * array[i] = 이전달의 끝 데이터들 (i< k)
 * array [`i`+k] = 현재달의 1부터 끝값까지 
 * array [m] = 다음달의 초반 데이터 (m<ds?)
 * ejs에서는 array[0] ~ array[35]
 */

