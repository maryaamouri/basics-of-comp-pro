const hasPath = (graph, src,des)=>{
   if(src===des)
        return true;
   
   for(let neighbor of graph[src])
       if( hasPath (graph,neighbor,des))
        return true;
    
    return false;
  
}


// const hasPath = (graph, src,des)=>{
//     const stack =[src];
    
//   while(stack.length>0)
//     {
//          let current = stack.pop();
//         if( current === des )
//           return true;
//         for(let neighbor of graph[current])
//             stack.push(neighbor);
//     }
//     return false;
// }

// const hasPath = (graph, src,des)=>{
//     const queue =[src];
    
//   while(queue.length>0)
//     {
//         const current = queue.shift();
//         if( current === des )
//           return true;
           
//         for(let neighbor of graph[current])
//             queue.push(neighbor);
//     }
//     return false;
// };
graph = 
{
    a:['c','b'],
    b:['d'],
    c:['f'],
    d:['e'],
    e:[],
    f:[]
}
console.log(hasPath(graph,'a','e'))

