import React from "react";

const ItemList = props => {
    console.log(props.itemList.map(x => x.itemText));
  return (
    <div>
      {props.itemList.map((x, index) => (
        <div>
          <span>{index}: {x.itemText} </span>
          <button> Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
