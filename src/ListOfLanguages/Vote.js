import { useState } from 'react'
export default function Vote(props)
{   const [num, setNum] = useState(0)
    function clickOnMe()
    {
    setNum(num + 1)
    }
    return(
        <div>
            <span>Vote {num} </span>
            <span>{props.langName}</span>
            <button onClick = {clickOnMe}>Vote</button>
         </div>
    )
}