'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
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

  
}