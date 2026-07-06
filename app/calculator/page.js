"use client";
import {useRef} from "react";

function BabyComponent(){
    return <div> 
        this is bay component
    
        </div>
}


export default function Calculator() {

    // useRef ka maqsad tag ko compponent m use krna
    let tag1 = useRef();
    let tag2 = useRef();

    let tag3 = useRef();

    function sum() {

        debugger;
        tag3.current.value = +tag1.current.value + +tag2.current.value;

    }

    let name = "Faisalabad";


    return  <div>

            

            {name}
            <BabyComponent></BabyComponent>

        <input ref={tag1} type="text" placeholder="0"  ></input>
        <input ref={tag2} type="text" placeholder="0"  ></input>

        <input ref={tag3} type="text" placeholder="0" disabled></input>

        <button onClick={sum}>Sum</button>

    </div>

    let a = 34;

    function some(){

    }

}