let array =[4,2,1,5,6,7,8,2,5,3]

function mergeSort ( arr ){
if( arr.length <=1){
  return arr;
}

let middle = Math.floor(arr.length/2); 

let la = arr.slice(0,middle);

let ra =arr.slice(middle) ;

return merge( mergeSort(la), mergeSort(ra))
}

function merge(left, right){
  let result =[];

while(left.length && right.length){

  if (left[0] <= right[0]){
    result.push(left.shift())
  }else{
    result.push(right.shift())
    }
  }

    while(left.length){
      result.push(left.shift())
    }

    while(right.length){
      result.push(right.shift())
      
    }

    return result;
  }


console.log(mergeSort(array))
