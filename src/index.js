const HOUR = 60 * 60 * 1000;
const DAY  = 24 * HOUR;



exports.from = (date) => {

  if(date instanceof Date)
    date = date.getTime();

  date = new Date(date + 5.5 * HOUR);

  return date.toISOString().substring(0,10)

}



exports.tomorrow  = () => this.from(Date.now() + DAY);

exports.today     = () => this.from(Date.now());

exports.yesterday = () => this.from(Date.now() - DAY);

exports.lastWeek  = () => this.from(Date.now() - 7 * DAY);



exports.shift = (date, days) => {
  if(!days) return date;
  date = date.substring(0, 10);
  date = new Date(date + ' GMT+530');
  return this.from(date.getTime() + days * DAY);
}



exports.getDuration = (startDate, endDate) => {
  let dtStart = (startDate ? new Date(startDate.substring(0, 10) + ' GMT+530') : new Date()).getTime() + 5.5 * HOUR;
  let dtEnd   = (endDate   ? new Date(  endDate.substring(0, 10) + ' GMT+530') : new Date()).getTime() + 5.5 * HOUR;
  return Math.floor(dtEnd / DAY) - Math.floor(dtStart / DAY);
}



exports.getWeekStart = (dateStr) => {
  let date = new Date(dateStr + ' GMT');
  let weekDay = date.getUTCDay() || 7;
  return exports.shift(dateStr, 1 - weekDay);
}

exports.getWeekEnd = (dateStr) => {
  let date = new Date(dateStr + ' GMT');
  let weekDay = date.getUTCDay() || 7;
  return exports.shift(dateStr, 7 - weekDay);
}

exports.getFy = (dateStr = today) => {
  return 'fy' + (parseInt(dateStr.substring(2,4)) + (dateStr.substring(5,10) >= '04-01' ? 1 : 0));
}

exports.getFyMonth = (dateStr = today) => {
  return [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ][ dateStr.substring(5,7) - 1 ];
}

exports.getFyStart = (dateStr = today) => {
  return parseInt(dateStr.substring(0,4)) + (dateStr.substring(5,10) >= '04-01' ? 0 : -1) + '-04-01';
}

exports.getFyEnd = (dateStr = today) => {
  return parseInt(dateStr.substring(0,4)) + (dateStr.substring(5,10) >= '04-01' ? 1 : 0) + '-03-31';
}

exports.getQtr = (dateStr = today) => {
  let md = dateStr.substring(5,10);
  if(md >= '10-01')
    return 'q3'
  else if(md >= '07-01')
    return 'q2'
  else if(md >= '04-01')
    return 'q1'
  else
    return 'q4'
}

exports.getTaxQtr = (dateStr = today) => {
  let md = dateStr.substring(5,10);
  if(md >= '12-16')
    return 'q4'
  else if(md >= '09-16')
    return 'q3'
  else if(md >= '06-16')
    return 'q2'
  else if(md >= '04-01')
    return 'q1'
  else if(md >= '03-16')
    return 'q5'
  else
    return 'q4'
}

exports.getFyDuration = (dateStr = today) => {
  return exports.getDuration(
    2000 + parseInt(dateStr.substring(2,4)) + (dateStr.substring(5,10) >= '04-01' ? 0 : -1) + '-04-01',
    2000 + parseInt(dateStr.substring(2,4)) + (dateStr.substring(5,10) >= '04-01' ? 1 :  0) + '-03-31'
  ) + 1;
}
