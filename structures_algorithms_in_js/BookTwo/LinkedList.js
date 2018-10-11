//
// 链表
//

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.length = 0; // {2}
        this.head = null; // {3}
    }
    append (element){
        let node = new Node(element);
        let current;
        if (this.head === null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    insert (position, element){

    }
    removeAt (position){

    }
    remove (element){

    }
    indexOf (element){

    }
    isEmpty() {

    }
    size() {

    }
    toString(){

    }
    print (){
        let current = this.head;
        let result = [];
        while(current){
            result.push(current.element)
            current = current.next;
        }
        console.log(result.join(","))
    }
}

var list = new LinkedList();
list.append(15);
list.append(10);
list.append(12);
list.print();
console.log('index5')
