function echo(parameter) {
   const data = typeof parameter
   console.log(data);
   if(data === 'string' || data === 'number'){
       console.log(parameter);
   }else {
       console.log(`Parameter is not suitable for printing`);
   }
    }
  
echo('Hello, JavaScript!')
echo(18)
echo(null)