// Queue
class Queue {
    constructor() {
        let items = [];
        this.items = items;
    }

    enqueue(element) {
        this.items.push(element)
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
        return (this.items.toString());
    }
}

export default Queue;

////
//let queue = new Queue();
//
//queue.enqueue("John");
//queue.enqueue("Jack");
//console.log(queue.isEmpty())
//
//queue.print();
//console.log(queue.size()); //输出3
//console.log(queue.isEmpty()); //输出false
//queue.dequeue();
//queue.dequeue();
//queue.print();
//
//
////
//var priorityQueue = new PriorityQueue();
//priorityQueue.enqueue("John", 2);
//priorityQueue.enqueue("Jack", 1);
//priorityQueue.enqueue("Camila", 1);
//priorityQueue.enqueue('tst',5)
//priorityQueue.print();
//
//
//let hotPotato=(list,num)=>{
//	let queue = new Queue();
//	list.map((item)=>{
//		queue.enqueue(item);
//	})
//	let out = '';
//	while(queue.size()>1){
//		for(let i=0;i<num;i++){
//			queue.enqueue(queue.dequeue())
//		}
//		out = queue.dequeue();
//		console.log(out + " out!")
//	}
//	return queue.dequeue();
//}
//
//var names = ['John','Jack','Camila','Ingrid','Carl'];
//var winner = hotPotato(names, 7);
//console.log('胜利者：' + winner);
