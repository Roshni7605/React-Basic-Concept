import React, { useState } from "react";

function Rendering(){

    const [loggedIn, setLoggedIn] = useState()

    return(
        <div>
            <h1>Conditional Rendering</h1>
            {/* if-else  */}
            {/* {loggedIn ? <h1>Hey, Welcome</h1> : <h1>Wrong Credentials</h1>} */}
            {/* Switch */}
            {loggedIn == 1 ? <h1>Hey, Welcome</h1> : loggedIn == 2 ? <h1>Wrong Credentials</h1> : <h1>Not Valid</h1>}
        </div>
    )
}

export default Rendering