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

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];