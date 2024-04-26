// keyword | can?change | Fn scope?
//   var   |    YES     |   NO
//   let   |    YES     |   YES
// const   |    NO      |   YES

var string1 = 'ss1'
let Str_a_2 = 'str-2'
const Str01 = 'aaa01',
   Str02 = 'b-b02',
   Str03 = 'cc-03',
   Str04 = '-dd04';

// String.prototype.indexOf()
const str_indexOf_ex1 = "HelloMelon";
str_indexOf_ex1.indexOf('ell');   //1
str_indexOf_ex1.indexOf('Melon'); //5
str_indexOf_ex1.indexOf('llo');   //2


// String.prototype.startsWith() __ คำที่ค้นหาเริ่มที่ index ?? หรือไม่
const start_str_ex1 = "start-HelloWorld";
start_str_ex1.startsWith('sta');         // true  sta เริ่มที่ index 0 หรือไม่
start_str_ex1.startsWith('sta', 1);      // false sta เริ่มที่ index 1 หรือไม่
start_str_ex1.startsWith('t-Hello', 4);  // true  t-Hello เริ่มที่ index 4 หรือไม่
start_str_ex1.startsWith('World', 11);   // true  World เริ่มที่ index 11 หรือไม่
start_str_ex1.startsWith('loW', 11);     // true  World เริ่มที่ index 11 หรือไม่
start_str_ex1.startsWith('loW', 11);     // true  World เริ่มที่ index 11 หรือไม่


// String.prototype.endWith(ketword, length) คำที่ค้นหาจบ ด้วย ... && ภายใน index
const end_str_ex1 = "end_HelloWorld";
end_str_ex1.endsWith('World');    // true  string ทั้งหมด นี้     จบด้วย "World" หรือไม่
end_str_ex1.endsWith('Wor', 12);  // true  ใน length 12 ตัวอักศร จบด้วย "Wor"   หรือไม่
end_str_ex1.endsWith('_H', 5);    // true  ใน length 5  ตัวอักศร จบด้วย "_H"    หรือไม่
end_str_ex1.endsWith('Wor', 9);   // false length 9 จะเป็น end_Hello
end_str_ex1.endsWith('llo', 9);   // true  length 9 จะเป็น end_Hello จะจบด้วย 'llo'


// String.prototype.slice(start, end)
const sli_str_ex1 = "HelloWorld";
const sliceEx1 = sli_str_ex1.slice(1); // เริ่มที่ index 1 เป็นต้นไป
/*output*/// elloWorld
const sliceEx2 = sli_str_ex1.slice(1,5); // เริ่มที่ index 1 ถึง 5
/*output*/// ello
const sliceEx3 = sli_str_ex1.slice(5); // เริ่มที่ index 5 เป็นต้นไป
/*output*/// World
const sliceEx4 = sli_str_ex1.slice(12); // เริ่มที่ index 12 เป็นต้นไป
/*output*/// ''


// String.prototype.substring(start, end)
// Output same prototype.slice
const sub_string = "sub_HelloWorld";
const sub_Ex1 = sub_string.slice(1);   // elloWorld
const sub_Ex2 = sub_string.slice(1);   // elloWorld
const sub_Ex3 = sub_string.slice(1,5); // ello
const sub_Ex4 = sub_string.slice(5);   // World
const sub_Ex5 = sub_string.slice(12);  // ''
