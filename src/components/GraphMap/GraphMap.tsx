import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as CytoscapeComponent  from 'react-cytoscapejs';

type GraphMapProps = {
  ref: React.RefObject<HTMLInputElement>;
}

const GraphMap: React.FC<GraphMapProps> = ({ref}) => {

  const elements = [
      { data: { id: 'one', label: 'Node 1' }, position: { x: 200, y: 200 } },
      { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 500 } },
      { data: { id: 'three', label: 'Node 3' }, position: { x: 300, y: 300 } },
      { data: { id: 'four', label: 'Node 4' }, position: { x: 600, y: 600 } },
      { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
      { data: { source: 'three', target: 'four', label: 'Edge from Node3 to Node4' }},
      { data: { source: 'three', target: 'two', label: 'Edge from Node3 to Node2' } },
      { data: { source: 'four', target: 'two', label: 'Edge from Node2 to Node4' } }
  ];

  return (
      <CytoscapeComponent id={ref} elements={elements} style={ { width: '1500px', height: '1500px' } } />
  );

}

export default GraphMap;