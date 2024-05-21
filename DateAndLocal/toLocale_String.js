// run node toLocale_String.js

const year = 2024;
const Month = [1,2,3,4,5,6,7,8,9,10,11,12]
const local = 'en-US'

const options = {
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric',
 };

 // ตามที่เขียน DateString จะ retune เป็น string เสมอ


//LocaleDate 01
const LocaleDate_01 = new Date().toLocaleDateString()
console.log(LocaleDate_01 ,typeof LocaleDate_01);// 21/5/2567 string

//LocaleDate 02
const LocaleDate_02 = new Date().toLocaleDateString('th-TH', options)
console.log(LocaleDate_02);// วันอังคารที่ 21 พฤษภาคม 2567


//List
//English
const English = new Date().toLocaleDateString(`${local}`, { month: 'long', year: 'numeric' })
console.log(English ,typeof English);//May 2024

//Thailand
const Thailand = new Date().toLocaleDateString("th-TH", { month: 'long', year: 'numeric' })
console.log(Thailand);//พฤษภาคม 2567

//Japan
const Japan = new Date().toLocaleDateString("ja", { month: 'long', year: 'numeric' })
console.log(Japan);//2024年5月

//Italy
const Italy = new Date().toLocaleDateString("it-it", {day: 'numeric',  month: 'long', year: 'numeric' })
console.log(Italy);//21 maggio 2024


//zh	China
const China = new Date().toLocaleDateString("zh", {day: 'numeric',  month: 'long', year: 'numeric' })
console.log(China); //2024年5月21日

// zh-CN	Chinese (S)
const SouthChina = new Date().toLocaleDateString("zh-CN", {day: 'numeric',  month: 'long', year: 'numeric' })
console.log(SouthChina); //2024年5月21日

// zh-HK	Chinese (Hong Kong)
// zh-MO	Chinese (Macau)
// zh-SG	Chinese (Singapore)
// zh-TW	Chinese (Taiwan)
// output เหมือนกัน