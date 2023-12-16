import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props){

//     const [newTitle, setNewTitle] = useState("");

//     const[title, setTitle]=  useState(props.title);

//    const clickHandler = ()=>{
//     setTitle(newTitle)
//    }

//    const changeHandler = (event)=>{
//     setNewTitle(event.target.value);
//    }

    return (
        <div className='expanse-item'>
           <ExpenseDate date={props.date}/>
            <div className="expanse-item_description">
                {/* <h2>{title}</h2> */}
                <h2>{props.title}</h2>
                <div className='expanse-item_price'>${props.amount}</div>
            </div>
            {/* <input type='text' value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change title</button> */}
        </div>
    );
}
export default ExpenseItem; 