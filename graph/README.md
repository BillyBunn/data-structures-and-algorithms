# Graphs
**[Wikipedia](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)):**
> A Graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected Graph or a set of ordered pairs for a directed Graph. These pairs are known as edges, arcs, or lines for an undirected Graph and as arrows, directed edges, directed arcs, or directed lines for a directed Graph. The vertices may be part of the Graph structure, or may be external entities represented by integer indices or references

## Challenge
#### Implement your own Graph. 
The graph should be represented as an adjacency list, and should include the following methods:
1. `AddNode()`
   - Adds a new node to the graph
   - Takes in the value of that node
   - Returns the added node
2. `AddEdge()`
   - Adds a new edge between two nodes in the graph
   - Include the ability to have a “weight”
   - Takes in the two nodes to be connected by the edge
   - Both nodes should already be in the Graph
3. `GetNodes()`
   - Returns all of the nodes in the graph as a collection (set, list, or similar)
4. `GetNeighbors()`
   - Returns a collection of nodes connected to the given node
   - Takes in a given node
   - Include the weight of the connection in the returned collection
5. `Size()`
   - Returns the total number of nodes in the graph

#### Write tests to prove the following functionality:
1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned
8. An empty graph properly returns `null`

## Approach & Efficiency
I used ES6 class syntax to create my own `Graph` class. To make my implementation concise and understandable, I also created a `Vertex` and `Edge` class that the `Graph`'s methods could use. 

The most important property in my `Graph` class is its `adjacencyList`, which is a new instance of a [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), another new feature of ES6. `Map` prototype methods are used in the methods of my `Graph` class. 

The `Graph` class also has a `_size` property, which indicates the number of vertices in its `adjacencyList`.

## API
* `addVertex(value)`
* `addDirectedEdge(startVertex, endVertex, weight)`
* `addUndirectedEdge(startVertex, endVertex, weight)`
* `getVertices()`
* `getNeighbors(vertex)`
* `print()`
