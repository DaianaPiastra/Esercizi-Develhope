import { useState } from "react"

export function Login() {
    const [data, setData]= useState({
        userName: '',
        passWord:'',
        session: false
    })
    function handleInputChange(event) {
        const name= event.target.name
        const value= event.target.value
        const checked= event.target.checked
        const type= event.target.type
        setData((d)=>{
            return {
                ...d,
                [name]: type=== 'checkbox'? checked:value
            }

        })
       
    }

    function handleResetForm() {
        setData(createData())
        
    }

    function handleLoginFormSubmit(event) {
        console.log('Login buttom pressed', data)
        event.preventDefault()
    }


    
    return (
        <form onSubmit={handleLoginFormSubmit}>
            <h1>My Form</h1>

            <input name="userName" value={data.userName} onChange={handleInputChange} type="text" />
            <input name="passWord" type="password" value={data.passWord} onChange={handleInputChange} />

            <input name="session"  type="checkbox" checked={data.session} onChange={handleInputChange}/>

            <button type="submit" disabled={!data.userName || !data.passWord} >Login</button>

            <button onClick={handleResetForm}>Reset</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </form>

        
    )
}