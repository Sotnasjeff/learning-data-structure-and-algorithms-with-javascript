class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {

        if(index === 0) {
            return this.prepend(value);
        }

        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        };

        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++

        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}



const myLinkedList = new LinkedList(5)
myLinkedList.append(8)
myLinkedList.append(16)
myLinkedList.append(10)
myLinkedList.prepend(7)
console.log(myLinkedList.insert(2, 99))
