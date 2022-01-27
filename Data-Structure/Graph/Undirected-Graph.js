class Graph {
    constructor() {
        this.addjacencyList = {};
    }
    addVertex(val) {
        if (!this.addjacencyList[val]) this.addjacencyList[val] = [];
    }
    addEdge(v1, v2) {
        this.addjacencyList[v1].push(v2)
        this.addjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        this.addjacencyList[v1] = this.addjacencyList[v1].filter(el => el !== v2)
        this.addjacencyList[v2] = this.addjacencyList[v2].filter(el => el !== v1)
    }
    removeVertex(v1) {
        while (this.addjacencyList[v1].length) {
            let addjacentVertext = this.addjacencyList[v1].pop()
            this.removeEdge(v1, addjacentVertext)
        }
        delete this.addjacencyList[v1]
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = [];
        const adjacencyList = this.addjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    return dfs(neighbour);
                }
            })
        })(start);
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.depthFirstRecursive("A"));