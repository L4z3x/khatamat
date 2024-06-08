import './login.css'
import React ,{ useEffect, useState } from 'react';
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
            <div className='form-window'>
                <p className='form-title'>Welcome</p>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} className='input' placeholder='username'/>
                    <input type='password' onChange={handleChange} className='input1' placeholder='password'/>
                    <button type='submit' className='form-submit-but'>Log in</button>
                </form>
                <div className='other-option-div'>
                    <span className='go-to-signup'>
                        don't have an account yet ? <a href=''>Sign in</a> {/*TODO: link to sign in form*/}
                    </span>
                    <span>
                        <a>Forget password ?</a> {/*TODO: link to change password using email */}
                    </span>

                </div>
                
            </div>
        </div>
    );
}
export default Login;