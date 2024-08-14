import React, { useState } from 'react'
import  './index.css'

function ColorPicker() {


    const [color, setColor] = useState('#ffffff')

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

  return (
    <>
        <div className="container">
            <div className="colorPicker" style={{backgroundColor : color}}>
                <h2>selected color : {color} </h2>
            </div>
            <div className="color">
            <label> select a color :</label>
            <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    </>
  )
}

export default ColorPicker
