'use strict';

const Graph = require('../graph.js');

describe('graph.js', () => {

  it('Adds vertices to the graph', () => {
    const graph = new Graph();
    graph.addVertex('Washington');
    graph.addVertex('North Dakota');
    graph.addVertex('California');

    expect(graph._size).toBe(3);
    expect(graph.getVertices().length).toBe(3);
    expect(graph.getVertices()[0].value).toBe('Washington');
    expect(graph.getVertices()[1].value).toBe('North Dakota');
    expect(graph.getVertices()[2].value).toBe('California');
  });

  it('Adds edges to the graph', () => {
    const graph = new Graph();
    let a = graph.addVertex('Washington');
    let b = graph.addVertex('North Dakota');
    let c = graph.addVertex('California');
    graph.addUndirectedEdge(a, b, 10);
    graph.addUndirectedEdge(b, c, 100);
    graph.addUndirectedEdge(a, c, 9);

    expect([...graph.adjacencyList.values()].length).toBe(3);
    expect([...graph.adjacencyList.values()][0].length).toBe(2);
    expect([...graph.adjacencyList.values()][1].length).toBe(2);
    expect([...graph.adjacencyList.values()][2].length).toBe(2);
  });

  it('Retrieves a collection of all vertices from the graph', () => {
    const graph = new Graph();
    graph.addVertex('Washington');
    graph.addVertex('North Dakota');
    graph.addVertex('California');

    expect(Array.isArray(graph.getVertices())).toBeTruthy();
    expect(graph.getVertices().length).toBe(3);
    expect(graph.getVertices()[0].value).toBe('Washington');
    expect(graph.getVertices()[1].value).toBe('North Dakota');
    expect(graph.getVertices()[2].value).toBe('California');
  });

  it('Retrieves all appropriate neighbors of a vertex on the graph', () => {
    const graph = new Graph();
    let a = graph.addVertex('Washington');
    let b = graph.addVertex('North Dakota');
    let c = graph.addVertex('California');
    graph.addUndirectedEdge(a, b, 10);
    graph.addUndirectedEdge(b, c, 100);
    graph.addUndirectedEdge(a, c, 9);

    expect(graph.getNeighbors(a).length).toBe(2);
    expect(graph.getNeighbors(a)[0].vertex.value).toBe('North Dakota');
    expect(graph.getNeighbors(a)[1].vertex.value).toBe('California');
    expect(graph.getNeighbors(c).length).toBe(2);
    expect(graph.getNeighbors(c)[0].vertex.value).toBe('North Dakota');
    expect(graph.getNeighbors(c)[1].vertex.value).toBe('Washington');
  });

  it('Returns neighbors of a vertex with the weight between vertices included', () => {
    const graph = new Graph();
    let a = graph.addVertex('Washington');
    let b = graph.addVertex('North Dakota');
    let c = graph.addVertex('California');
    graph.addUndirectedEdge(a, b, 10);
    graph.addUndirectedEdge(b, c, 100);
    graph.addUndirectedEdge(a, c, 9);

    expect(graph.getNeighbors(a).length).toBe(2);
    expect(graph.getNeighbors(a)[0].weight).toBe(10);
    expect(graph.getNeighbors(a)[1].weight).toBe(9);
    expect(graph.getNeighbors(c).length).toBe(2);
    expect(graph.getNeighbors(c)[0].weight).toBe(100);
    expect(graph.getNeighbors(c)[1].weight).toBe(9);
  });

  it('Returns its size, representing the number of vertices in the graph', () => {
    const graph = new Graph();
    graph.addVertex('Washington');
    graph.addVertex('North Dakota');
    graph.addVertex('California');

    expect(graph._size).toBe(3);
  });

  it('Can return a graph with only one vertex and edge', () => {
    const graph = new Graph();
    let a = graph.addVertex('Washington');
    graph.addDirectedEdge(a, a, 10);

    expect(graph.getVertices().length).toBe(1);
    expect(graph.getVertices()[0].value).toBe('Washington');
    expect(graph.getNeighbors(a).length).toBe(1);
    expect(graph.getNeighbors(a)[0].vertex.value).toBe('Washington');
    expect(graph.getNeighbors(a)[0].weight).toBe(10);
  });

  it('Returns null if the graph is empty', () => {
    const graph = new Graph();
    expect(graph.getVertices()).toBeNull();
  });
});
