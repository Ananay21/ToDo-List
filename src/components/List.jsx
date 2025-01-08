import { useState } from "react";
import SingleItem from "./SingleItem";

function List(){
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

    const [ListItems,UpdateList]= new useState([]);
    const [ListItem,UpdateListItem]=new useState(
        {
            listContent:"",
            isChecked:false
        });

    function handleClick(event){
        const thisItem=ListItem;
        UpdateList((prevArr)=>{
            if(thisItem.listContent.length!==0){
                if(prevArr.length===0) return [thisItem];
                return [...prevArr,thisItem];
            }
            else{
                return prevArr;
            }
        })
        UpdateListItem({listContent:"",isChecked:false});
    }

    function handleChange(event){
        const newChange=event.target.value;
        UpdateListItem((prevVal)=>{
            return {listContent:newChange,isChecked:false};
        });
    }

    function deleteItem(index){
        UpdateList((prevArr)=>{
            return prevArr.filter((element,id)=>{
                return id!==index;
            })
        });
    }

    function handleEnter(event){
        if(event.code=="Enter" && ListItem.listContent.length!==0){
            handleClick(event);
        }
    }

    function handleLineThrough(index){
        UpdateList((prevArr)=>{
            return prevArr.map((element,id)=>{
                if(id===index){
                    return {
                        listContent:(element.listContent),
                        isChecked:!(element.isChecked)
                    }
                }
                else return element; 
            });
        });
    }

    return <div className="List-container">
            <div className="List">
                <h1 style={{"textAlign":"center",paddingBottom:"10px",textShadow:"1px 1px black"}}>List</h1>
                <div className="ip-area">
                <input type="text" value={ListItem.listContent} placeholder="Create your tasks" onChange={handleChange} onKeyDown={handleEnter}/>
                <button type="submit" onClick={handleClick} onMouseOver={hoverBtn} onMouseOut={outBtn} style={ (btnColor) ? styleObj : {} }>Add</button>
                </div>
                <ul>
                    {
                        ListItems.map((element,id)=>{
                            return <SingleItem item={element.listContent} key={element+id} index={id} delFunc={deleteItem} checkFunc={handleLineThrough} checkVal={element.isChecked}/>
                        })
                    }
                </ul>
            </div>
        </div>
}

export default List;