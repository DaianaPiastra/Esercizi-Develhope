import { useState } from "react"

export function Container({title,children}) {
    const [collapsed, setCollapsed]= useState(false)

    function handleToggleCollapse() {
        setCollapsed((c) => !c)
    }
    return <div className="app">
        <div className="app_title" >{title}
        <button onClick={handleToggleCollapse}>Toggle</button>
        </div>
         <div className={!collapsed?'app_content': 'app_content_hidden' }>{children}</div>
        
        </div>
}