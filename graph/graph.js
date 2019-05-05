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
}