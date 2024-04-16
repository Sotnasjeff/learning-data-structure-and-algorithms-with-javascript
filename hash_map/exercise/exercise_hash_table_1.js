function FirstRecurringCharacter(value) {
    let helper = new Map();

    for (let i of value) {
        if(helper.get(i)){
            return i
        }
        helper.set(i, true)
    }
}

console.log(FirstRecurringCharacter([2,5,1,2,3,5,1,2,4]))
console.log(FirstRecurringCharacter([2,1,1,2,3,5,1,2,4]))
console.log(FirstRecurringCharacter([2,,3,4,5]))