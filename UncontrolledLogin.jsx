export function UncontrolledLogin() {
    
    function handleFormSubmit(event) {
        event.preventDefault()
     
        const formData= new FormData(event.target)

        const data= {
            userName: formData.get('username'),
            passWord: formData.get('password'),
            checkBox: formData.get('checkbox')=== 'on'? true: false
        }

        console.log(data);
    }




    return (
        <form onSubmit={handleFormSubmit}>
            <h1>My Uncontrolled Form</h1>
            <hr />
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
    
}