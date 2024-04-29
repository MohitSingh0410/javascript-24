import React, { useState } from 'react';

const TreeNode = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState({});

 
  const toggleExpand = name => {
    setExpandedNodes(prevState => ({
      ...prevState,
      [name]: !prevState[name] 
    }));
  };

  return (
    <ul>
      {data.map(node => (
        <li key={node.name}>
          <button onClick={() => toggleExpand(node.name)}>
            {expandedNodes[node.name] ? "-":" +"}
          </button>
          {node.name}
          {expandedNodes[node.name] && node.children.length > 0 && (
            <TreeNode data={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
};


const data = [
  {
    name: "Parent 1",
    children: [
      {
        name: "Child1",
        children: [
          {
            name: "Grand child 1",
            children: [
              { name: "Grand Grand child 1", children: [] },
              { name: "Grand Grand child 2", children: [] },
              { name: "Grand Grand child 3", children: [] }
            ]
          },
          { name: "Grand child 2", children: [] }
        ]
      },
      {
        name: "Child2",
        children: [
          {
            name: "Grand child 1",
            children: [{ name: "Grand Grand child 1", children: [] }]
          },
          {
            name: "Grand child 2",
            children: [{ name: "Grand Grand child 1", children: [] }]
          }
        ]
      }
    ]
  }
];

const Recursion = () => (
  <div className="App">
    <h1>Tree Structure</h1>
    <TreeNode data={data} />
  </div>
);

export default Recursion;
