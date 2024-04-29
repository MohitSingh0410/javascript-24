

import React, { useState } from "react";

const FunctionRender = ({ RenderChildrenData }) => {
  const [showToggle, setShowToggle] = useState(false);

  const renderToggle = () => {
    setShowToggle(!showToggle);
  };

  const RenderData = (children) => {
    const childernData = [];

    if (children) {
      for(let i = 0; i < children.length; i++) {
        const child = children[i];
        let childjsx = [];
        childjsx = (
          <div>
            <h2> {child.name} </h2>
            <div>{RenderData(child.Children)}</div>
          </div>
        );
        childernData.push(childjsx);
      }
    }
    // console.log(childernData);
    return childernData;
  };
  return (
    <div>
      <h2 onClick={renderToggle}>{RenderChildrenData.name}</h2>
      {!showToggle && RenderChildrenData.Children && RenderChildrenData.Children.length > 0 && (
        <div>{RenderData(RenderChildrenData.Children)}</div>
      )}
    </div>
  );
};

//  Main Function
const Functionlooping = () => {
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
              Children: [
                {
                  name: "Grand Grand Child 1",
                  Children: [
                    { name: "ABC", Children: [] },
                    { name: "XYZ", Children: [] },
                  ],
                },
                { name: "Grand Grand Child 2", Children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
  // console.log("data", data);

  return (
    <>
      <div className="Functionlooping">
      <h1>Functionlooping</h1>
        {data.map((e, index) => (
          <FunctionRender key={index} RenderChildrenData={e} />
        ))}
      </div>
    </>
  );
};

export default Functionlooping;