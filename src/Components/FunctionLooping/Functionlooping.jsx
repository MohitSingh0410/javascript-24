import React, { useState } from "react";

const FunctionRender = ({ RenderChildrenData, handleParentCheckboxChange }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleParentCheckboxChange(RenderChildrenData.name, !isChecked);
  };

  const RenderData = (children) => {
    const childernData = [];

    if (children) {
      for (let i = 0; i < children.length; i++) {
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
    return children.map((child, index) => (
      <div key={index} className="mon">
        <FunctionRender
          RenderChildrenData={child}
          handleParentCheckboxChange={handleParentCheckboxChange}
        />
      </div>
    ));
  };
  return (
    <div>
      <span className="display">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <h2 onClick={toggleChildren}>{RenderChildrenData.name}</h2>
        <button onClick={toggleChildren}>{showChildren ? "-" : "+"}</button>
      </span>
      {showChildren &&
        RenderChildrenData.Children &&
        RenderData(RenderChildrenData.Children)}
    </div>
  );
};

// Main Function
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

  const handleParentCheckboxChange = (name, checked) => {
    data.forEach((parent) => {
      if (parent.name === name) {
        parent.Children.forEach((child) => {
          child.isChecked = checked;
        });
      }
      const allChildrenChecked = parent.Children.every((child) => child.isChecked);
      parent.isChecked = allChildrenChecked;
    });
  };

  return (
    <>
      <div className="Functionlooping">
        <h1>Functionlooping</h1>
        {data.map((e, index) => (
          <FunctionRender
            key={index}
            RenderChildrenData={e}
            handleParentCheckboxChange={handleParentCheckboxChange}
          />
        ))}
      </div>
    </>
  );
};

export default Functionlooping;
