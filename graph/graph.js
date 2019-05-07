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
    return this._size ? [...this.adjacencyList.keys()] : null;
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  print() {
    for (const [key, value] of this.adjacencyList) {
      console.log(key, value);
    }
  }
}

module.exports = Graph;
