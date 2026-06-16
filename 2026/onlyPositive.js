function positiveOnly(arr) {

  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) { 
    
    if (typeof arr[i] === 'number' && arr[i] > 0) { 
      sum += arr[i]; 
    }
  }
  
  console.log(sum);
}
    positiveOnly([7, -2, 8, 9])