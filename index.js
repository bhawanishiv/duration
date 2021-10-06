
//const __duration =(60*60*24*7*5)+(60*60*24*4)+ (1*60*60*2)+(1*60*32)+(1*18);
//const oneMinute=60;
//const oneHour = oneMinute *60;
//const oneDay = oneHour * 24;
//const oneWeek = oneDay * 7;

// ----------------------------------------

// console.log("duration->"+duration);
// const weeks = Math.floor(duration/oneWeek);
// console.log("weeks->"+weeks);
// const days = Math.floor( duration%oneWeek /oneDay);
// console.log("days->"+days);
// const hours = Math.floor( duration%oneWeek %oneDay/oneHour);
// console.log("hours->"+hours);
// const minutes = Math.floor(duration%oneWeek%oneDay%oneHour/oneMinute);
// console.log("minutes->"+minutes);
// const seconds = Math.floor(duration%oneWeek%oneDay%oneHour%oneMinute);
// console.log("seconds->"+seconds);

// ----------------------------------------


// if(duration>=oneWeek){
//   const n = Math.floor(remaining/oneWeek);
//   remaining = remaining%oneWeek;
//   str=`${n}w`;
// }
// if(duration>=oneDay){
//   const n = Math.floor(remaining/oneDay);
//   remaining = remaining%oneDay;
//   str=`${str} ${n}d`;
// }
// if(duration>=oneHour){
//   const n = Math.floor(remaining/oneHour);
//   remaining = remaining%oneHour;
//   str=`${str} ${n}h`;
// }

// if(duration>=oneMinute){
//   const n = Math.floor(remaining/oneMinute);
//   remaining = remaining%oneMinute;
//   str=`${str} ${n}m`;
// }

// str=`${str} ${remaining}s`;
// console.log("durationStr->"+str);

// ---------------------------------------------

//             // 0,  1,  2,  3,  4
const suffixes=['s','m','h','d','w'];
//             // m  h     d        w 
//             // 0  1     2        3          
const durations=[60,60*60,60*60*24,60*60*24*7];

const getDuration=(duration,remaining,point,count=0,string='')=>{
  if(duration<=0) return '0s';
  if(point<=0) return `${string} ${remaining}${suffixes[point]}`;
  
  if(duration>=remaining){
    const max = durations[point-1];
    const suffix = suffixes[point];
    const n = Math.floor(remaining/max);
    const __string =n || count?` ${n}${suffix}`:''
    const _string=`${string}${__string}`;
    const _remaining = remaining%max;
    return getDuration(duration,_remaining,point-1,n,_string);
  }
  return '';
}

/**
 *
 * @param {number} duration
 * @returns {string} date string
 *
 * E.g.
 * ```
 * const durationString = getDurationString((60*60*24*7*5)+(60*60*24*4)+(1*60*60*2)+(1*60*32)+(1*18)); // 5w 4d 2h 32m 18s
 * const durationString = getDurationString(60); // 1m 0s
 * const durationString = getDurationString(60*60*24,60*60*24); // 1d 0h 0s
 * const durationString = getDurationString(60*60*2,60*60*2); // 2h 0m 0s
 *
 * ```
 * */
const getDurationString = duration => {
    return getDuration(duration, duration, suffixes.length - 1).trim();
}

export default {
  getDurationString
}
