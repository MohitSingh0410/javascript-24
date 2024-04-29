import React, { useState } from "react";

const TreeNode = ({ data }) => {
  const [showChildren , setShowChildren ] = useState(true);
 
  const toggle = () => {
    setShowChildren(!showChildren)
    console.log(showChildren)
  }

  return (
    <div >
      {data.map((node) => (
        <div key={node.name} className="mon"  >
        <h2 onClick={toggle}>
          {node.name}
          <button onClick={toggle}>{showChildren ? "+" : "-"}</button>
        </h2>
          {!showChildren && node.Children && node.Children.length > 0 && (
            <TreeNode data={node.Children} />
          )}
        </div>
      ))}
    </div>
  );
};

const Loop = () => {
  const data = [
    {
      name: "Parent 1",
      Children: [
        {
          name: "Child 1",
          Children: [
            {
              name: "Grand Child 1",
              Children: [
                { name: "Grand Grand Child 1", Children: [] },
                { name: "Grand Grand Child 2", Children: [] },
              ],
            },
          ],
        },
        {
          name: "Child 2",
          Children: [
            {
              name: "Grand Child 2",
              children: [
                {
                  name: "Grand Grand Child 1",
                  children: [
                    { name: "ABC", children: [] },
                    { name: "XYZ", children: [] },
                  ],
                },
                { name: "Grand Grand Child 2", children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="Loop">
      <h1>Normal</h1>
      <TreeNode data={data} />
    </div>
  );
};

export default Loop;
