const island = (grid)=>{
    const visited = new Set()
    let min = Infinity
    
    for(let r=0;r<grid.length;r+=1)
    {    for(let c=0;c<grid[0].length;c+=1)
        {
            const size = explore(grid, r, c, visited);
            if(size<min && size>0)
            min = size 
        } 
        
    }    

    return min
}
const explore=( grid, r,c, visited)=>{
    if( r<0 || c<0 || r>grid.length || c>grid[0].length)
        return 0
    
    if(grid[r,c]==='w')
        return 0
    const pos=r+','+c
    if(visited.has(pos))
        return 0
    visited.add(pos)

    let size =1

    size+=explore(grid, r-1, c, visited)
    size+=explore(grid, r+1, c, visited)
    size+=explore(grid, r, c-1, visited)
    size+=explore(grid, r, c+1, visited)

    return size
}

const grid =[
    ['L','W','W','L','W'],
    ['L','W','W','L','L'],
    ['W','L','W','L','W'],
    ['W','W','L','L','L'],
]
const count= island(grid)
console.log(count)