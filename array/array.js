class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.length
    }

    pop() {
        delete this.data[this.length-1];
        this.length--;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }

    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
    }


}

const newArray = new Array();
newArray.push(12)
console.log(newArray)
console.log(newArray)
newArray.push(99)
newArray.push(1500)
console.log(newArray)
newArray.delete(1)
console.log(newArray)
newArray.pop()
console.log(newArray)