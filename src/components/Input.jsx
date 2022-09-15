import React, { useState } from "react";

const Input = () => {
    const [input, setInput] = useState("")
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form>
            <input type="text" placeholder="type" value={input} onChange={handleChange}/>
            <p>{input.length}</p>    
         </form>
    )
}

export default Input;
