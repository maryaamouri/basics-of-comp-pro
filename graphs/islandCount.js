const island = (grid)=>{
    const visited = new Set()
    let count=0;
    for(let r=0;r<grid.length;r+=1)
        for(let c=0;c<grid[0].length;c+=1)
            if(explore(grid, r, c, visited))
                count+=1

    return count
}
const explore=( grid, r,c, visited)=>{
    if( r<0 || c<0 || r>grid.length || c>grid[0].length)
        return false
    
    if(grid[r,c]==='W')
        return false
    if(visited.has(r+','+c))
        return false
    visited.add((r+','+c))

    explore(grid, r-1, c, visited)
    explore(grid, r+1, c, visited)
    explore(grid, r, c-1, visited)
    explore(grid, r, c+1, visited)

    return true
}

const grid =[
    ['L','W','W','L','W'],
    ['L','W','W','L','L'],
    ['W','L','W','L','W'],
    ['W','W','L','L','L'],
]
const count= island(grid)
console.log(count)