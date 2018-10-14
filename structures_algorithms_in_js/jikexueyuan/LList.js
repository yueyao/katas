/**
 * Created by hebo on 2018/10/11.
 */


// 单节点
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element) {
        var node = new Node(element);
        var current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.length = this.length + 1;
    }

    insert(position, element) {
        let node = new Node(element);
        let length = this.length;
        let head = this.head;
        let current;
        if (position > -1 && position < length) {
            current = head;
            let index = 0;
            let prev;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
                // prev.next = current.next;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(position) {
        let length = this.length;
        let head = this.head;
        let current;
        if (position > -1 && position < length) {
            current = head;
            let index = 0;
            let prev;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }

    remove(element) {
        var current = this.head;
        var prev = null;

        if (current.element === element) {
            this.head = current.next;
            return true;
        }
        while ((( current.element) !== element) && current.next) {
            prev = current;
            current = current.next;
        }
        if (current.element === element) {
            prev.next = current.next;
            current.next = null;
            this.length--;
            return true;
        }
        return false;
    }

    indexOf(element) {
        var current = this.head;
        var index = -1;
        while (current) {
            if (element === current.element) {
                return index
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    toString() {

        var current = this.head, //{1}
            string = '';    //{2}

        while (current) {   //{3}
            string += "," + current.element; //{4}
            current = current.next;   //{5}
        }
        return string.slice(1);       //{6}
    }

    size() {
        return this.length;
    }

    print() {

    }
}

var ll = new LinkedList();

ll.append('xx');
ll.append('xx3');
ll.append('xx5');
ll.append('xx7');
ll.append('xx9');
ll.append('xx11');

console.log(ll.toString())