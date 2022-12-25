const BFS = (graph, source)=>{
   
   const queue = [source];
   while(queue.length>0)
   {
       current = queue.shift();
       console.log(current);
       for(child of graph[current])
            queue.push(child);
   }
}
graph = 
{
    a:['c','b'],
    b:['d'],
    c:['f'],
    d:['e'],
    e:[],
    f:[]
}
BFS(graph, 'a')
