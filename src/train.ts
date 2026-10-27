// ==================== A-Task =========================

// ==================== Z-Task =========================
// function sumOfEvens (arr: number[]) {
//     let sum = 0;
//     arr.filter((x)=>{ x%2 === 0 ? sum+=x : null});
//     return sum
// }
// console.log(sumOfEvens([4,56,12,3,7]));
// ==================== Y-Task =========================
// function findSameEle (arr1: number[], arr2: number[]) {
//     let arr = [];
//     for (const ele of arr1) {
//         if (arr2.includes(ele)) arr.push(ele);
//     }
//     return arr;
// }
// console.log(findSameEle([5,4,2,3,9], [6,2,7,3,9]))
// ==================== X-Task =========================
// function countOccur(obj: Object, str: string) {
//     let x = 0;
//     for (const [key, value] of Object.entries(obj)) {
//         if (key==str) {
//             x++;
//         } else if (typeof(value) === "object"){
//             for (const ke in obj) {
//                 if (ke==str) {
//                  x++;
//                 }
//             }
//         }
//     } 
//     return x;
// }

// console.log(countOccur({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'));
