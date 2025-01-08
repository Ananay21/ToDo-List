import { useState } from "react";
import SingleItem from "./SingleItem";

function List(){
    const [ListItems,UpdateList]= new useState([]);
    const [ListItem,UpdateListItem]=new useState("");
    const [btnColor,changeBtnColor]=new useState(false);

    const styleObj=
    {
        backgroundColor:"whitesmoke",
        color:"rgb(87, 87, 171)",
        cursor:"pointer"
    }

    function hoverBtn(){
        changeBtnColor(true);
    }

    function outBtn(){
        changeBtnColor(false);
    }

    function handleClick(event){
        const thisItem=ListItem;
        UpdateList((prevArr)=>{
            if(thisItem.length!==0){
                if(prevArr.length===0) return [thisItem];
                return [...prevArr,thisItem];
            }
            else{
                return prevArr;
            }
        })
        UpdateListItem("");
    }

    function handleChange(event){
        const newChange=event.target.value;
        UpdateListItem(newChange);
    }

    function deleteItem(index){
        UpdateList((prevArr)=>{
            return prevArr.filter((element,id)=>{
                return id!==index;
            })
        });
    }

    function handleEnter(event){
        if(event.code=="Enter"){
            handleClick(event);
        }
    }

    return <div className="List-container">
            <div className="List">
                <h1 style={{"textAlign":"center",paddingBottom:"10px"}}>List</h1>
                <div className="ip-area">
                <input type="text" value={ListItem} placeholder="Create your tasks" onChange={handleChange} onKeyDown={handleEnter}/>
                <button type="submit" onClick={handleClick} onMouseOver={hoverBtn} onMouseOut={outBtn} style={ (btnColor) ? styleObj : {} }>Add</button>
                </div>
                <ul>
                    {
                        ListItems.map((element,id)=>{
                            return <SingleItem item={element} key={element+id} index={id} delFunc={deleteItem}/>
                        })
                    }
                </ul>
            </div>
        </div>
}

export default List;