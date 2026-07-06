
import mongoose from 'mongoose';

// MongodB = actual DAatabase
// mongoose = MongoDB m easily DB CRUD operations krti h 

// 1) mognodb se connet kreti h 
// 2)ORM model deti h 

// USER (name, email, password)
// product (name, email, password)

global.mongooKaConnection = global.mongooKaConnection || {
    connection:null
}

// Object relational Mapper

// Skip the DB inner working
// JS ki API Use krni h 
// CRUD (create, received, update, delette)

// Use-Usera ka structure
// prodct-prodct ka structure


export async function connectToDB(){

    try{

    if(global.mongooKaConnection.connection){
        return global.mongooKaConnection.connection;
    }

    global.mongooKaConnection.connection =  await mongoose.connect(process.env.MONGO_URL);

    console.log('DB conneced');

    }
    catch(e){
        console.log(e.message)
    }

}