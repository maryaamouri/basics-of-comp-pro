const undirectedPath =(edges,nodeA,nodeB)=>
{
    const graph = buildGraph(edges);
    const queue = [nodeA]
    const visited =new Set();
   
    
    while(queue.length>0)
    {   
        const current = queue.shift();
        if(current===nodeB)
            return true;
        if(visited.has(current))
            continue;
        visited.add(current);
        for( neighbor of graph[current])
        {   queue.push(neighbor)
        }
    }
    return false;  
}


const buildGraph =(edges)=>{
    const graph={};
    
    for(let edge of edges){
        const [a,b]= edge;
        if(!(a in graph)) graph [a] =[]
        if(!(b in graph)) graph[b]=[]
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}
edges =[
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['o','n'],
    ]
const path= undirectedPath (edges,'j','o')
console.log(path)


