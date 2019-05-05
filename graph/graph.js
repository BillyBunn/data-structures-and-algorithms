'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this._size = 0;
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this._size++;
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    this.adjacencyList.get(startVertex).push(new Edge(endVertex, weight));
  }

  addUndirectedEdge(startVertex, endVertex, weight) {
    this.addDirectedEdge(startVertex, endVertex, weight);
    this.addDirectedEdge(endVertex, startVertex, weight);
  }

  getVertices() {
    // let vertices = [];
    // let keys = this.adjacencyList.keys();
    // for(let value of keys) {
    //   vertices.push(value);
    // }
    // return vertices;

    return this.adjacencyList.values();
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  print() {
    for (const [key, value] of this.adjacencyList) {
      console.log(key, value);
    }
  }
}

const graph = new Graph();
let a = graph.addVertex('Washington');
let b = graph.addVertex('North Dakota');
let c = graph.addVertex('California');

graph.addUndirectedEdge(a, b, 10);
graph.addUndirectedEdge(b, c, 100);
graph.addUndirectedEdge(a, c, 9);

// graph.print();

graph.getVertices(); //?

// graph.getNeighbors(b); //?