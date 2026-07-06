import { loginHogya } from "@/store/userSection";
import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";

export default function SessionCheck(){

    const dispatch = useDispatch();

    useEffect(function(){


        const sToken = localStorage.getItem('token');

        if(!sToken){
            return; 
        }

const dData = new FormData();
dData.append('token', sToken)
dData.append('type', 'sessionWala')


axios.post('/api/auth/abc', dData).then(function(resp){

    if(resp.data != null){
                dispatch( loginHogya(resp.data));
            }

        });

    }, []);

    return <></>

}