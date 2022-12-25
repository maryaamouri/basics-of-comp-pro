    // foreach unvisited node apply dfs
    // and increment the counter by 1 
    // until all nodes became visited

const connectedComponents= (graph)=>{

    let count = 0;
    const visited = new Set();

    for (node in graph)
    {
        if(visited.has(String(node))) 
            continue;
        count=count+1;
        // Apply DFS for each node
        const stack= [node];
        while(stack.length>0)
        {   
            const current =stack.pop()
            // console.log(visited)
            visited.add(String(current));
            for(neighbor of graph[current])
            {   if(!visited.has(String(neighbor))) 
                    stack.push(neighbor)
            }
        
           
        }
        
        
    }
    return count
}

graph ={
    3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
}


console.log(connectedComponents(graph))
