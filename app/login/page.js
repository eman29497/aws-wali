"use client";
import '@/node_modules/bootstrap/dist/css/bootstrap.css';
import './login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Provider, useDispatch } from 'react-redux';
import { loginHogya } from '@/store/userSection';
import { meraStore } from '@/store/store';
import { useRouter } from 'next/navigation';

export default function Page(){

  return <div>

    <Provider store={meraStore}>
      <Login></Login>
    </Provider>

  </div>

}


function Login(){

  let dispatch = useDispatch();

  // agar JS se page change krna h to yeh hook se hoga
  let router = useRouter()

  let {register, handleSubmit} = useForm();

  const saveKaro = async (data)=>{

    let fData = new FormData();
    fData.append('email', data.email)
    fData.append('password', data.password)
    fData.append('type','loginWala')

    let resp = await axios.post('/api/auth/abc', fData)

    if(resp.data != null){
      localStorage.setItem('token', resp.data.token);
      dispatch( loginHogya(resp.data.userMilgya));
      router.push('/dashboard');
    }else{
      alert("Invalid credenttials");
    }


    console.log(resp.data)

  }

    return <div id="loginForm">
    <div id="formContent">
  {/* Tabs Titles */}
  {/* Icon */}
  <div className="fadeIn first">
    <img
      src="http://danielzawadzki.com/codepen/01/icon.svg"
      id="icon"
      alt="User Icon"
    />
  </div>
  {/* Login Form */}
  <form onSubmit={handleSubmit( saveKaro  )}>
    <input
      type="text"      
      className="fadeIn second"
      {...register('email')}
      placeholder="login"
    />
    <input
      type="text"
      className="fadeIn third"
      {...register('password')}
      placeholder="password"
    />
    <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
  </form>
  {/* Remind Passowrd */}
  <div id="formFooter">
    <a className="underlineHover" href="#">
      Forgot Password?
    </a>
  </div>
</div>
</div>

}