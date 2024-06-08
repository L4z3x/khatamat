import '../style/login.css'
import React ,{ useState } from 'react';

const changePath = ()=>{
    let url = window.location.pathname
    console.log(url)
    if (url === '/'){
        window.location.pathname = '/signup'
    }
}
function Login(){
    const [Input,setInput] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Input)
    }
    const handleChange = (e)=>{
        const { placeholder , value} = e.target
        switch(e.target.placeholder){ 
            case 'username':
                setInput(Input =>({...Input, [placeholder]: value}))
                break;
            case 'password':
                setInput(Input => ({...Input, [placeholder]: value}));
                break;
        }
    }

    
    return (
        <div className='background'>
            <div className='log-form-window'>
                <p className='form-title'>Welcome to Khatamat</p>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} className='input' placeholder='username'/>
                    <input type='password' onChange={handleChange} className='input1' placeholder='password'/>
                    <button type='submit' className='form-submit-but'>Log in</button>
                </form>
                <div className='other-option-div'>
                    <span className='go-to-signup'>
                        don't have an account yet ? &nbsp;<strong onClick={changePath}>Sign up</strong> {/*TODO: link to sign in form*/}
                    </span>
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Forgot password ?</strong> {/*TODO: link to change password using email */}
                    </span>

                </div>
                
            </div>
        </div>
    );
}
export default Login;