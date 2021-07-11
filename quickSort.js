let array =[4,2,1,5,6,7,8,2,5,3]
// 2,4,1,5,6,7,8,2,5

function quickSort ( arr ){

  if(arr.length <=1){
    return arr;
  }

  let pivot = arr[arr.length-1];
let la =[];
let ra =[];
  for(let i =0; i<arr.length-1; i++){
    if( arr[i]> pivot){
      ra.push(arr[i])
    }else{
      la.push(arr[i])
    }
  }

  return [...quickSort(la), pivot, ...quickSort(ra)]
 
}


console.log(quickSort(array))