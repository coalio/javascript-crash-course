import React, { useState, useEffect } from "react"
import { ItemMIM, ItemN } from "../../components"

export const Home = () => {
    const [ items, setItems ] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setItems([
                <ItemMIM/>,
                <ItemN/>
            ])
        }, 5000)
    }, [])

    const renderItems = () => {
        return items ? items : [1,2,3,4,5].map((n) => {
            return <li>{n}</li>
        })
    }

    const renderLabel = () => {
        return items ? null : <h3>Loading items, please wait</h3>
    }
    
    return (
        <ul>
            {renderLabel()}
            {renderItems()}
        </ul>
    )
}