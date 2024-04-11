function mergeSortedArrays(value, anotherValue) {
    if(value == undefined || anotherValue == undefined) {
        return 0
    }

    let result = []

    let i = 0
    let j = 0

    while(i < value.length && j < anotherValue.length) {
        if(value.length <= anotherValue.length) {
            if (value[i] < anotherValue[j]) {
                result.push(value[i])
                i++
            } else {
                result.push(anotherValue[j])
                j++
            }
        } else {
            if (anotherValue[j] < value[i] ) {
                result.push(anotherValue[j])
                j++
            } else {
                result.push(value[i])
                i++
            }
        }
    }

    while(i < value.length) {
        result.push(value[i])
        i++
    }

    while(j < anotherValue.length) {
        result.push(anotherValue[j])
        j++
    }

    return result
}

console.log(mergeSortedArrays([1,2,3,8,10,15, 99], [5,6,9, 52, 90, 100]))