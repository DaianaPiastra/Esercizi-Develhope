import { useState } from "react"

export function Login() {
   const [data, setData]= useState({
        userName:'',
        passWord:'',
        session: false
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


    return (
        <div>
            <input name="username" type="text" value={data.userName} onChange={handleInputChange} placeholder="UserName"/>
            <input name="password" type="password" value={data.passWord}  onChange={handleInputChange} placeholder="PassWord"/>
            <label htmlFor="">
               Remember  
              <input type="checkbox" name="checkbox" checked={data.session} />
            </label>
           
        </div>
    )
}