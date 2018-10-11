/**
 * Created by hebo (razr409355439@gmail.com)on 14-10-13.
 */
/**
 * 图 图算法
 *
 * 图，由边的集合以及顶点的集合组成。
 *    （地图就是一种图，每个位置有一个坐标/顶点(v1,v2)
 *     如果一个图的顶点 是有序的，称之为有向图，那么就可以排序并绘制出流向 (例如 1--》2--》3
 *     路径： 由一系列的顶点构成，长度由第一个顶点到最后一个顶点之间的数量表示
 *     环： 由指向资深的顶点组成的路径称之为环。
 *     圈：至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同
 *     如果2个顶点之间有路径，那么是强连通。
 *  *图的实际信息 都保存在边上面，它描述了图的结构
 *  *表示图的边的方法成为邻接表或者邻接表数组
 */

/**
 *  搜索图
 *
 *  深度优先搜索：  从一条路井的其实顶点开始追溯，知道到达最后一个顶点，然后回溯，继续追溯吓一跳路径，直到到达最后顶点，如此往复，知道没有路径为止。
 *
 *  广度优先搜素：  从第一个顶点开始，尝试访问尽可能靠近它的顶点。本质上，这种搜索在图上是逐层移动的，首先检查最靠近第一个顶点的层，再逐渐向下移动到离起始顶点最远的层
 *
 *
 */

/**
 * 顶点类， 记录顶点和边
 * @param label
 * @constructor
 */
function Vertxex(label,wasVisited){
    this.label = label;
    this.wasVisited = wasVisited
}

function Graph(v){
    var me = this ;
    me.vertices = v;
    me.edges = 0;
    //邻接表
    me.adj =  [];

    for(var i=0;i<me.vertices;++i){
        me.adj[i]=[];
        me.adj[i].push("")
    }
    //标记  用于搜索
    me.marked = [];
    for(var j=0;j<me.vertices;j++){
        me.marked[j] = false;
    }
    me.addEdge = addEdge;
    me.toString = toString;
    me.show = show;
    me.dfs = dfs;
    me.bfs = bfs;

    me.edgeTo = [];
    me.pathTo = pathTo;
    me.hasPathTo = hasPathTo;

    function addEdge(v,w){
        me.adj[v].push(w)
        me.adj[w].push(v)
        me.edges++;
    }

    function toString(){

    }

    function show(){
        for (var i = 0; i < me.vertices; ++i) {
            console.log(i + "->")
            var s = i+' ->'
            for (var j = 0; j < me.vertices; ++j) {
                if (me.adj[i][j] != undefined)
                    s += me.adj[i][j] + ' '
            }
            console.log(s)
        }
    }

    /**
     * 深度优先搜索
     * 访问一个没有访问过的顶点，将它标记为已访问，再递归地去访问在初始顶点的邻接表中其他没有访问过的顶点。
     */
    function dfs(v){
        me.marked[v] = true;
        if(me.adj[v]!= undefined){
            console.log('visited vertex: '+ v)
        }
        for(var i in me.adj[v]){
            if(!me.marked[i]){
                me.dfs(i)
            }
        }

    }

    /**
     * 广度优先搜索
     * 广度优先搜索算法使用了抽象的队列而不是数组来对已访问过的顶点进行排序。其算法的工作原理如下：

        查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；
        从图中取出下一个顶点v，添加到已访问的顶点列表；
        将所有与v相邻的未访问顶点添加到队列。
     * @param v
     */
    function bfs(v){
        var queue = [] ;
        me.marked[v] = true;
        queue.push(v);  //
        while(queue.length>0){
            var s = queue.shift(); //队首出队
            if(s != undefined){
                console.log('Visisted vertex: '+ s)
            }
            for(var i in me.adj[s]){
                if(!me.marked[i]){
                    me.edgeTo[i] = s;
                    me.marked[i]=true;
                    queue.push(i)
                }
            }
        }
    }


    //广度优先搜索   最短路径
    function pathTo(v){
        var source = 0;
        if(!me.hasPathTo(v)){
            return undefined;
        }
        var path = [];
        for(var i=v; i!=source; i=me.edgeTo[i]){
            path.push(i)
        }
        path.push(v)
        return path;
    }
    //判断是否有这条边
    function hasPathTo(v){
        return me.marked[v];
    }
}