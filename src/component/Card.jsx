import React from "react";
import DropIndicator from "./DropIndicator";

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        className="Card"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
      >
        <h4> {title} </h4>
      </div>
    </>
  );
};

export default Card;
