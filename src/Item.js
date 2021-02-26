import React, { useState } from 'react'

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false)
    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }} />
            <span>{content}</span>
        </li>
    )
}

export default Item; 