'use strict';

const Graph = require('../../../graph/graph.js');


class Vertex {
  constructor(value) {
    this.value = value;
  }
}

const getEdges = (graph, citiesArr) => {
  let output = { possible: true, cost: 0 };

  for (let i = 0; i < citiesArr.length - 1; i++) {
    try {
      let hasCurrent = graph.has(citiesArr[i]);
      let current = graph.get(citiesArr[i]);
      let neighbors = graph.getNeighbors(current),
        hasNeighbor = false,
        neighbor;
      for (let neigh of neighbors) {
        if (neigh.vertex.value === citiesArr[i + 1]) hasNeighbor = true;
        neighbor = neigh;
      }
      if (hasCurrent && hasNeighbor) output.cost += neighbor.weight;
      }
    }
    catch (error) {
      return output = error;
    }
    
  }




  return output;
};

const graph = new Graph();
let a = graph.addVertex('seattle');
let b = graph.addVertex('toronto');
let c = graph.addVertex('chicago');
let d = graph.addVertex('baltimore');
let e = graph.addVertex('la');
let f = graph.addVertex('miami');

graph.addUndirectedEdge(a, b, 150);
graph.addUndirectedEdge(a, c, 82);
graph.addUndirectedEdge(b, c, 99);
graph.addUndirectedEdge(c, d, 105);
graph.addUndirectedEdge(c, e, 37);
graph.addUndirectedEdge(c, f, 26);
graph.addUndirectedEdge(e, f, 250);

// let cities = ['seattle', 'toronto'];
let cities = ['la', 'baltimore'];

getEdges(graph, cities); //?

module.exports = getEdges;
