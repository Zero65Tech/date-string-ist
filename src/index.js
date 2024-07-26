const HOUR = 60 * 60 * 1000;
const DAY  = 24 * HOUR;



exports.from = (date) => {

  if(date instanceof Date)
    date = date.getTime();

  date = new Date(date + 5.5 * HOUR);

  return date.toISOString().substring(0,10);

}



exports.nextWeek  = () => exports.from(Date.now() + 7 * DAY);

exports.tomorrow  = () => exports.from(Date.now() + DAY);

exports.today     = () => exports.from(Date.now());

exports.yesterday = () => exports.from(Date.now() - DAY);

exports.lastWeek  = () => exports.from(Date.now() - 7 * DAY);



exports.min = (dateStr, ...dateStrArr) => {

  let dateStr1 = dateStr;
  let dateStr2 = dateStrArr[0];

  if(dateStr1 === undefined)
    return dateStr2;
  if(dateStr2 === undefined)
    return dateStr1;

  if(dateStr1 === null)
    return dateStr2;
  if(dateStr2 === null)
    return dateStr1;

  dateStr = dateStr1 <= dateStr2 ? dateStr1 : dateStr2;
  if(dateStrArr.length <= 1)
    return dateStr;

  return exports.min(dateStr, ...dateStrArr.slice(1));

}

exports.max = (dateStr, ...dateStrArr) => {

  let dateStr1 = dateStr;
  let dateStr2 = dateStrArr[0];

  if(dateStr1 === undefined)
    return dateStr2;
  if(dateStr2 === undefined)
    return dateStr1;

  if(dateStr1 === null)
    return dateStr2;
  if(dateStr2 === null)
    return dateStr1;

  dateStr = dateStr1 >= dateStr2 ? dateStr1 : dateStr2;
  if(dateStrArr.length <= 1)
    return dateStr;

  return exports.max(dateStr, ...dateStrArr.slice(1));

}



exports.shift = (dateStr, days) => {
  if(!days) return dateStr;
  let date = new Date(dateStr + ' GMT+530');
  return exports.from(date.getTime() + days * DAY);
}

exports.getDuration = (startDate, endDate) => {
  let dtStart = (startDate ? new Date(startDate + ' GMT+530') : new Date()).getTime() + 5.5 * HOUR;
  let dtEnd   = (endDate   ? new Date(  endDate + ' GMT+530') : new Date()).getTime() + 5.5 * HOUR;
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

exports.getFyStart = (dateStr) => {
  dateStr = dateStr || exports.today();
  return parseInt(dateStr.substring(0,4)) + (dateStr.substring(5,10) >= '04-01' ? 0 : -1) + '-04-01';
}

exports.getFyEnd = (dateStr) => {
  dateStr = dateStr || exports.today();
  return parseInt(dateStr.substring(0,4)) + (dateStr.substring(5,10) >= '04-01' ? 1 : 0) + '-03-31';
}



exports.getQtr = (dateStr) => {
  dateStr = dateStr || exports.today();
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

exports.getTaxQtr = (dateStr) => {
  dateStr = dateStr || exports.today();
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

exports.getFy = (dateStr) => {
  dateStr = dateStr || exports.today();
  return 'fy' + (parseInt(dateStr.substring(2,4)) + (dateStr.substring(5,10) >= '04-01' ? 1 : 0));
}



exports.getFyDuration = (dateStr) => {
  dateStr = dateStr || exports.today();
  return exports.getDuration(exports.getFyStart(dateStr), exports.getFyEnd(dateStr)) + 1;
}
