function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top
  let top = row - 1;
  if(top >= 0 && graph[top][col] === 1) neighbors.push([top, col]);

  // Check bottom
  let bot = row + 1;
  if(bot < graph.length && graph[bot][col] === 1) neighbors.push([bot, col]);

  // Check left
  let left = col - 1;
  if(left >= 0 && graph[row][left] === 1) neighbors.push([row, left]);

  // Check right
  let right = col + 1;
  if(right < graph[row].length && graph[row][right] === 1) neighbors.push([row, right]);

  // Return neighbors
  return neighbors;

  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  
  // Put the stringified starting node in visited
  let stringified = [row,col].toString();
  visited.add(stringified);

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while(stack.length > 0) {
    // Pop the first node
    let node = stack.pop();
    let [r, c] = node;
  
    // DO THE THING (increment size by 1)
    if(graph[r][c] === 1) size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    let neighbors = getNeighbors(r, c, graph);

    neighbors.forEach(el => {
      let elString = el.toString();
      if(!visited.has(elString)) {
        visited.add(elString);
        stack.push(el);
      }
    })
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  }
  // return size
  return size;

  // Your code here
}

module.exports = [getNeighbors, islandSize];