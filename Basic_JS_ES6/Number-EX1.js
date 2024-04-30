// RUN => node Basic_JS_ES6/Number-EX1.js
function MoreRow(num = 1) {
   return {
      mod_1: [`${num} % 1`, num % 1],
      mod_2: [`${num} % 2`, num % 2],
      mod_3: [`${num} % 3`, num % 3],
      mod_4: [`${num} % 4`, num % 4],
      mod_5: [`${num} % 5`, num % 5],
      mod_6: [`${num} % 6`, num % 6],
      mod_7: [`${num} % 7`, num % 7],
      mod_8: [`${num} % 8`, num % 8],
      mod_9: [`${num} % 9`, num % 9],
      mod10: [`${num} % 10`, num % 10],
   }
}
function Colome_5t10(num = 1) {
   if (num < 10){
      return {
         mod_5: [` ${num} % 5`, num % 5],
         mod_6: [` ${num} % 6`, num % 6],
         mod_7: [` ${num} % 7`, num % 7],
         mod_8: [` ${num} % 8`, num % 8],
         mod_9: [` ${num} % 9`, num % 9],
         mod10: [` ${num} % 10`, num % 10],
      }
   }
   else{
      return {
         mod_5: [`${num} % 5`, num % 5],
         mod_6: [`${num} % 6`, num % 6],
         mod_7: [`${num} % 7`, num % 7],
         mod_8: [`${num} % 8`, num % 8],
         mod_9: [`${num} % 9`, num % 9],
         mod10: [`${num} % 10`, num % 10],
      }
   }
}

// % คือการ เอาเศษ
//เศษ เช่น 7 % 2 output คือ 1 เพราะ 7 หาร 2 ก็จะได้ 2 เศษ 1 เศษคือ 1, 18 % 10 ก็จะได้ 1 เศษ 8
const Num_Mod_1t15 = [
   { mod_1: [` 1 % 1`, 1 % 1], mod_2: [` 1 % 2`, 1 % 2], mod_3: [` 1 % 3`, 1 % 3], mod_4: [` 1 % 4`, 1 % 4], ...Colome_5t10(1) },
   { mod_1: [` 2 % 1`, 2 % 1], mod_2: [` 2 % 2`, 2 % 2], mod_3: [` 2 % 3`, 2 % 3], mod_4: [` 2 % 4`, 2 % 4], ...Colome_5t10(2) },
   { mod_1: [` 3 % 1`, 3 % 1], mod_2: [` 3 % 2`, 3 % 2], mod_3: [` 3 % 3`, 3 % 3], mod_4: [` 3 % 4`, 3 % 4], ...Colome_5t10(3) },
   { mod_1: [` 4 % 1`, 4 % 1], mod_2: [` 4 % 2`, 4 % 2], mod_3: [` 4 % 3`, 4 % 3], mod_4: [` 4 % 4`, 4 % 4], ...Colome_5t10(4) },
   { mod_1: [` 5 % 1`, 5 % 1], mod_2: [` 5 % 2`, 5 % 2], mod_3: [` 5 % 3`, 5 % 3], mod_4: [` 5 % 4`, 5 % 4], ...Colome_5t10(5) },
   { mod_1: [` 6 % 1`, 6 % 1], mod_2: [` 6 % 2`, 6 % 2], mod_3: [` 6 % 3`, 6 % 3], mod_4: [` 6 % 4`, 6 % 4], ...Colome_5t10(6) },
   { mod_1: [` 7 % 1`, 7 % 1], mod_2: [` 7 % 2`, 7 % 2], mod_3: [` 7 % 3`, 7 % 3], mod_4: [` 7 % 4`, 7 % 4], ...Colome_5t10(7) },
   { mod_1: [` 8 % 1`, 8 % 1], mod_2: [` 8 % 2`, 8 % 2], mod_3: [` 8 % 3`, 8 % 3], mod_4: [` 8 % 4`, 8 % 4], ...Colome_5t10(8) },
   { mod_1: [` 9 % 1`, 9 % 1], mod_2: [` 9 % 2`, 9 % 2], mod_3: [` 9 % 3`, 9 % 3], mod_4: [` 9 % 4`, 9 % 4], ...Colome_5t10(9) },
   MoreRow(10), MoreRow(11), MoreRow(12), MoreRow(13), MoreRow(14), MoreRow(15),, MoreRow(16), MoreRow(17), MoreRow(18), MoreRow(19), MoreRow(20),
]

console.table(Num_Mod_1t15);