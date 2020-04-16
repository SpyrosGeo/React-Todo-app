import React from 'react'

export default function Todo({task}) {
    return (
        <div>
            <button>Edit</button>
            <button>X</button>
            <li>{task}</li>
        </div>
    )
}
