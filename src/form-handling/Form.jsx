import React, { useState } from "react";

function Form(){

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [condition, setCondition] = useState(false)

    function getFormData(event){
        console.log(name, city, condition)
        event.preventDefault()
    }

    return(
        <div>
            <h1>Form Handling in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter your name" onChange={(event)=> setName(event.target.value)} /><br /><br />
                <select onChange={(event) => setCity(event.target.value)}>
                    <option>Udaipur</option>
                    <option>Jaipur</option>
                    <option>Delhi</option>
                </select><br /><br />
                <input type="checkbox" onChange={(event) => setCondition(event.target.checked)}/><span>Accept Terms and Conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Form