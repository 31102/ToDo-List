import React, { useState } from 'react'
import "./style.css"
import List from './List';

const App = () => {
  const [input, setInput] = useState("");
  const [list, setlist] = useState([])

  const itemEvent = (e) => {
    setInput(e.target.value)
  }



  const onsubmit = (event) => {
    setlist((e) => {
      return [...e, input]
    })

    setInput("");
  }
  // const deleteItems = (id) => {
  //   setlist((e) => {
  //     return e.filter((arr, index) => {
  //       return index !== id
  //     })
  //   })

  // }
  return (
    <>
      <div className="main">
        <div className="box">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add Items' onChange={itemEvent} value={input} />
          <button onClick={onsubmit}>+</button>
          <div className="list">
            <ul>
              {list.map((currentVal, index) => {
                return <List text={currentVal} id={index} key={index} />
              })}
            </ul>
          </div>
        </div >
      </div >
    </>
  )
}

export default App
