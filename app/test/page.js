"use client";


// resultst.pk/isc/1/201

import { resumePluginState } from "next/dist/build/build-context";
import { useSearchParams } from "next/navigation"

export default function Page(){

    // some.com?name=ali&city=fsd&uni=gc
    // is URL m se name,city,nikalne keluye yeh hook use hoga
    let params = useSearchParams();

    // useRef();
    // useState()
    // useEffect()

    let cities = [
        {
            roll:1,
            name:"ali"
        },
        {
            roll:2,
            name:"rameez"
        },
        {
            roll:3,
            name:"aqsa"
        },
        {
            roll:4,
            name:"yahya"
        }
    ]

    let ciyFound = cities.find(function(city){

        return city.roll == params.get('roll');

    });

// some.com?name=ali&city=fsd&uni=gc

    return <div>
        <h1>{ ciyFound.name}</h1>
        <h1>{ params.get('name') }</h1>
        asd
        asdasdas
    </div>

}