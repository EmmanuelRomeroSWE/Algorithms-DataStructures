const mergeSort = (array) => {//This has a time complexity of O(nlog(n))
    const {length: thisSize } = array
    if(thisSize < 2) return array // This is a base case for the algorithm

    const mid = Math.floor(thisSize/2);
    const sortLeft = mergeSort(array.slice(0, mid))
    const sortRight = mergeSort(array.slice(mid, thisSize))

    return merge(sortLeft, sortRight) 
}

const merge = (leftArray, rightArray) => {
    let result = new Array() // O(n) Space 
    while(leftArray.length && rightArray.length){
        if(leftArray[0] < rightArray[0]){
            result.push(leftArray.shift())
        }else{
            result.push(rightArray.shift())
        }
    }
    return [...result, ...leftArray, ...rightArray]
}

console.log(mergeSort([3,23423,4,23123,5643563456,3,2,2,2,2]))