function rotate(arr)
{
    let rotations = arr.pop();
    
    for(let i = 1; i <= rotations; i++)
    {
        let current = arr.pop();

        arr.unshift(current);
    }
    console.log(arr.join(' '));

}
rotate(['1', '2', '3', '4', '2'])