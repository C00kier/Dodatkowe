//recursion + loop
function fibonacciSequence(num)
{
    numHolder = num;
    if(num === 0)
    {
        return 0;
    }
    else if(num === 1)
    {
        return 1;
    }
    else
    {
        return fibonacciSequence(num-1) + fibonacciSequence(num-2);
    }
}

const howManyNumbers = 30;
let stringFibonacci = "";
for(let i = 0; i < howManyNumbers; i++) 
{
    stringFibonacci += fibonacciSequence(i) + ",";
}

console.log(stringFibonacci.substring(0,stringFibonacci.length - 1));


//only loop
const arrayFibonacci = [];
for(let i = 0; i < 30; i++)
{
    if(i === 0)
    {
        arrayFibonacci[0] = 0;
    }
    else if(i === 1)
    {
        arrayFibonacci[1] = 1;
    }
    else
    {
        arrayFibonacci[i] = arrayFibonacci[i-1] + arrayFibonacci[i-2]; 
    }
}

console.log(arrayFibonacci.toString());

//-----------------
//recursion
function the3X1Problem(x)
{
    if(x === 1)
    {
        return 1;
    }
    else
    {
        if((x % 2) === 0)
        {
            return the3X1Problem(x / 2);
        }
        else
        {
            return the3X1Problem((3 * x + 1) / 2)
        }
    }
}

console.log(the3X1Problem(7852621598672));

//loop
let inputNumber = 514566476337;
while(inputNumber !== 1)
{
    if(inputNumber % 2 === 0)
    {
        inputNumber /= 2;
    }
    else
    {
        inputNumber = (3 * inputNumber + 1) / 2;
    }
}

console.log(inputNumber);