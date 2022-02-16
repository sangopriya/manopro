import React,{useState} from 'react'
import './Signupform.scss';
import * as AiIcons from 'react-icons/all';
import {Link} from 'react-router-dom';
import axios from 'axios'
//usenavigate its helpfull for routing a page in after submit a data
import { useNavigate } from 'react-router-dom';

function Signupform() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerSubmit =(e)=>{
    axios.post( "http://localhost:3000/auth/signup" ,{
      username:username,email:email,password:password
    })
    .then((response)=>{
      alert("sucessfully stored")
    });
  };
  // const registerSubmit =async(e)=>{
  //   try {
  //     const info = await axios.post(""http://crud-operation-auth.herokuapp.com/auth/signup"",{
  //       username:username,email:email,password:password
  //     })
  //     // if (!info) return res.status(400).json({msg:"error"})
  //     alert("Saved Succesfully",info)
     
  //   } catch (error) {
  //     console.log("error",error)
  //   }
  // };
 

  return (
    <div>
        <div className='overall_login_container'>
            <div className="main_conatiner">
              <div className='loginmove'>
                <Link  to={'/'} ><p className='sign'>? Sign in</p> </Link>
              </div>                          
              <p className='heading'>Sign up</p>
                <form>
                  <div className='form_group'>
                    <div className='block1'>
                      <input type="text" className ="txtfields" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} autoComplete='false'/>

                      <div className='iconalign'><AiIcons.FaRegUserCircle /></div>
                    </div>
                    <div className='block1'>
                      <input type="email" className ="txtfields" placeholder='Email@address' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='false'/>
                      <div className='iconalign'><AiIcons.RiLockPasswordFill /></div>
                    </div>
                    <div className='block1'>
                      <input type="password" className ="txtfields" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete='false'/>
                      <div className='iconalign'><AiIcons.RiLockPasswordLine /></div>
                    </div>
                    <div className='submitpart'>
                      <button className='btn active' onClick={registerSubmit} >sign up</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signupform