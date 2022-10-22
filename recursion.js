
// addition numbers

// recursion ---> function calling itself
// termination condition is so important else it will crash the system
const func1 = (n) => {
  if (n === 1)
    return 1
  return n + func1(n - 1);
}


console.log(func1(4));