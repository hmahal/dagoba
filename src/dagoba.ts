type Graph<T> =  {
  edges: Array<[T, T]>,
  vertices: Array<T>, 
  //TODO: Fix the typing for vertexIndex
  vertexIndex: any,
  autoId: number
}

type dagoba<T> = {
  graph: Graph<T>
}