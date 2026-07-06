import { NextResponse } from "next/server";
import fs from 'fs/promises';
import { connectToDB } from "@/app/lib/db";
import User from "@/models/user";
import * as jose from 'jose'
import { generateToken } from "@/utilies";


export async function  POST(req){

    await connectToDB();


    // agar FE se siraf JS ka object ara(file nahi arahi)
    // let some =  await req.json();

    // agar FE se JS ka object aur file bhi arahi h 
    let some =  await req.formData();

    let userD = JSON.parse(some.get('user'));

    if(some.get('type') == 'loginWala'){

        let userMilgya = await User.findOne({
            email: some.get('email'), 
            password: some.get('password')
        })

        let token = await generateToken({_id:userMilgya._id.toString()});    
        
        return NextResponse.json({userMilgya, token});

    }else if(some.get('type') == 'sessionWala'){

            const secret = new TextEncoder().encode(
            process.env.JWT_SECRET,
            )

        let extractedToken = await jose.jwtVerify (some.get('token'), secret)

        let meraUser = await User.findById(extractedToken.payload._id );

        return NextResponse.json(meraUser);

        console.log(20)

    }

    let meriFile = some. get('file');

    let fileKaBuffer = await meriFile.arrayBuffer();
    // [ 0,1,0,1]
     
    let nodeBuffer = Buffer.from(fileKaBuffer);

    let fileKaPath = process.cwd() + '\\public\\my-uploads\\' + meriFile.name;

    let nyaUser = new User();
    nyaUser.name = userD.email;
    nyaUser.password = userD.password;
    nyaUser.dp = fileKaPath;

    await nyaUser.save();


    await fs.writeFile(fileKaPath, nodeBuffer);


    return NextResponse.json({cat:'miioon'});

}

export async function  GET(req){

    await connectToDB();

    let users =  await User.find({});


    return NextResponse.json(users);

}


export async function  DELETE(req){

    
    await connectToDB();
    let userKiId =  req.nextUrl.searchParams.get('c');

    await User.findByIdAndDelete(userKiId);

    return NextResponse.json([]);

}

export async function  PUT(req){

    await connectToDB();

    const userD = await req.json();

     await User.findByIdAndUpdate(userD.id, {$set:{name:userD.userName}});

    return NextResponse.json({abc:true});

}