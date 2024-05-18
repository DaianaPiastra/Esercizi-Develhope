import { useState } from "react"

export function Login({onLogin}) {
   const [data, setData]= useState({
        userName:'',
        passWord:'',
        remember: false
   })

   function handleInputChange(event) {
      const name = event.target.name
      const value= event.target.value
      const checked= event.target.checked
      const type= event.target.type

      setData((d)=>{
        return {
            ...d,
            [name]: type==='checkbox'? checked: value
        }
      })
   }

   function handleLoginClick(event) {

     onLogin(data)
   }

   function handleResetForm() {
    setData({
        userName:'',
        passWord:'',
        remember: false
    })
    
   }
   
   function handleOnSubmitForm(event) {
    event.preventDefault()
    console.log(data)
   }
   




    return (
        <form onSubmit={handleOnSubmitForm}>
            <input name="username" type="text" value={data.userName} onChange={handleInputChange} placeholder="UserName"/>
            <input name="password" type="password" value={data.passWord}  onChange={handleInputChange} placeholder="PassWord"/>
            <label htmlFor="">
               Remember  
              <input type="checkbox" name="remember" checked={data.session} />
            </label>
            <button onClick={handleLoginClick} disabled={!data.passWord || !data.userName}>Login</button>
            <button onClick={handleResetForm}>Reset</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </form>
    )
}