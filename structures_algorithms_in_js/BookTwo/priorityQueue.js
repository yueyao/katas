//
// 优先队列
// 元素的添加和移除是基于优先级的。
//
class QueueElement {
    constructor(element, priority) {
        if (priority < 1) {
            throw Error('priority Must be greater than 0')
        }
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let elem = new QueueElement(element, priority)
        if (this.isEmpty()) {
            this.items.push(elem)
        } else {
            let added = false;
            let items = this.items;
            items.forEach((item, index)=> {
                if (elem.priority < item.priority) {
                    items.splice(index, 0, elem);
                    added = true;
                    return false;
                }
            })
            if (!added) {
                items.push(elem);
            }
        }

    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items.length = 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        return (JSON.stringify(this.items))
    }
}

export default  PriorityQueue