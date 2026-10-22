// ==================== Y-Task =========================
function findSameEle (arr1: number[], arr2: number[]) {
    let arr = [];
    for (const ele of arr1) {
        if (arr2.includes(ele)) arr.push(ele);
    }
    return arr;
}
console.log(findSameEle([5,4,2,3,9], [6,2,7,3,9]))
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
