let nums = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]
let newArray = []

const allPairs = nums?.map((num) => {
  let a = num
  let x = 10 - a
  newArray.push([a + ',' + x])
})
console.log(newArray)
return newArray
