"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


export default function Signup(){

    let router = useRouter();


    const createUser = async ()=>{

        let userName = prompt("Enter name")

        let resp = await axios.post('/api/auth/abc', {userName});

        console.log(resp.data);

    }

    const {handleSubmit, register} = useForm();

    const saveKaro = async (myData)=>{

        // agar files BE per nahi send kar rahe, to yeh methods sue kren
        // axios.post('/api/auth/abc', myData)

        // agar files BE per send krni hn to yeh method use kren 
        let formD = new FormData();

        let sObj = {
            email:myData.email,
            password:  myData.password,
            name:  myData.name
        }

        // formD.append('email', myData.email);
        // formD.append('password', myData.myFile[0]);
        
        formD.append('user', JSON.stringify(sObj));
        formD.append('file', myData.myFile[0]);

        let resp =  await axios.post('/api/auth/abc', formD);
        console.log(resp);        

    }

    return <div>

        <form onSubmit={handleSubmit(saveKaro)}>

        <input {...register('email')} type="email" />
        <input {...register('password')} type="password" />
        <input {...register('myFile')} type="file" />
        

        <button>Creae user</button>
        </form>

        yeh  signup tha

    </div>
}