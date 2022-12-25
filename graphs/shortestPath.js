// shortest path between two nodes:
// The key is to store the distance with the queue or stack
// using dfs or bfs theres no need to compare 

const buildGraph =(edges)=>{
    const graph={}
    for(let edge of edges){
        const [a,b]= edge
        if(!(a in graph))graph[a]=[]
        if(!(b in graph))graph[b]=[]
        graph[a].push(b)
        graph[b].push(a)
    }
return graph 
}
const shortestPath =(edges,src,des)=>{
    let distance= 0;
    const queue =[ [src,distance] ];
    const graph= buildGraph(edges)
    const visited = new Set(src)
    
    while(queue.length>0)
    {   
        let [current,distance] = queue.shift();
        if( current === des )
            return distance;
            
        for( neighbor of graph[current])
            if(!visited.has(neighbor))
            {
                visited.add(current)
                queue.push([neighbor,distance+1]);
            }
    }

    return -1;
    }
const edges =[
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
]
const path =shortestPath(edges,'v','z')
console.log(path)


