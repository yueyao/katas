Data Structures and Algorithms with JavaScript
==========================================

(数据结构与算法的javascript描述)


####queue.js

> 队列 先进先出。

``` 
    var queue = new Queue();
            
        queue.count()  //统计队列数量
        
        queue.clear()  //清空队列
        
        queue.enqueue(element)  //进队
        
        queue.dequeue()  //出队
        
        queue.front()   //队首
        
        queue.back()    //队尾
        
        queue.toString()  //输出队列全部内容
        
        queue.empty()    //判断队列是否为空
```

####list.js

> 列表

```
   var list = new List();
   
       list.clear()         //清空列表
       
       list.find(element)   //查找元素位置
       
       list.toString()      //输出列表全部内容
       
       list.insert(element,after) //某元素之前添加
       
       list.append(element)       //添加
       
       list.remove(element)       //移除某元素
       
       list.front()               //列表最前面
       
       list.end()                 //列表最后面
       
       list.prev()                //位置向前移动一个节点
       
       list.next()                //位置向后移动一个节点
       
       list.length()              //列表长度
       
       list.currPos()             //当前位置
       
       list.moveTo()              //移动到某一位置
       
       list.getElement(element)   //查找元素位置
       
       list.contains(elemenet)    //判断改元素是否在列表中
```

####stack.js

> 栈  ，后入先出

```
    var stack = new Stack();
    
        stack.pop();    //弹出栈顶元素
        
        stack.peek();   //返回栈顶元素
        
        stack.push(element);   //入栈
        
        stack.clear();  //清空栈
        
        stack.length(); //返回栈长度
```

####LList.js

> 链表

```
    var linkedList = new LinkedList();
    
        linkedList.find(element);        //查找是否在链表中

        linkedList.insert(newElement,item);   //插入元素到某个item后面

        linkedList.remove(element);      //移除某个元素

        linkedList.display();            //显示链表内容
```