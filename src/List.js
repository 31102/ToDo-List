import React, { useState } from 'react'


const List = (props) => {
    const [line,setLine]=useState(false);

    function cutIt(){
        setLine(true)
    }
    return (
        <>
            <div className='abc'>
                <span onClick={cutIt}></span>
                <li style={{textDecoration: line ? "line-through":"none"}}>{props.text}</li>
            </div>
        </>
    )
}

export default List