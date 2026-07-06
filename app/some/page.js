"use client";

import { useEffect, useRef } from "react"

export default function Page(){

    let abc = useRef();

    // yeh component ki HTML (DOM) kay browser m banne kak waitt  krta h aur baad m chlta h
    useEffect(function(){

        abc.current.innerText = "FSD";

    });

    // function perform(){
    //     abc.current.innerText = "FSD";
    // }

    return <div>

        {/* <button onClick={perform}>click me</button> */}

        <h1  ref={abc}></h1>

    </div>

}
