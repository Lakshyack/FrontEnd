let arr = [2,3,4,5,6];
let new_Arr = [];
 for(let i = 0; i<arr.length;i++){
    let temp = arr[i];
    new_Arr.push(temp**2);
 }
 console.log(new_Arr);

 // alternate of this long process

 let nnewArr = arr.map(e =>{
    return e**2
 })