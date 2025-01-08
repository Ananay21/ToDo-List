import { useState } from "react";

function SingleItem(props){
  const [checked,updateChecked]= new useState(false);
  const [hover,updateHover]=new useState(false);

  function handleCheck(){
    updateChecked(!checked);
  }

  function handleMouseOver(){
    updateHover(true);
  }

  function handleMouseOut(){
    updateHover(false);
  }

  return <div className="list-grid" style={{cursor:"default"}}>
            <li className="ListItem" onClick={handleCheck} style={{textDecoration: checked? "line-through" : "none"}}>
              {props.item}
            </li>
            <span style={{textAlign:"center",opacity:(hover ? "50%" : "100%")}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={()=>props.delFunc(props.index)}>x</span>
          </div>
}

export default SingleItem;