const DFS = (graph, source)=>{
   console.log(source)
   for(let child of graph[source])
        DFS(graph,child)
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
DFS(graph, 'a')
