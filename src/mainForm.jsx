import { useState } from "react"

export function MainForm({ onSubmit }){
    const [item, setItem] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        onSubmit(item)

        setItem("")
    }

    return(
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item" className="new-item-title">New Item</label>
                <input 
                    value={item}
                    type="text" 
                    id="item"
                    onChange={e => setItem(e.target.value)} 
                />
            </div>
            <button className="btn">ADD</button>
        </form>
    )
}