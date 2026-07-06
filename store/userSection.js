import { createSlice } from "@reduxjs/toolkit";

let userSection = createSlice({
    name:"userSection",
    initialState:{
        loggedUser:null,
        data:['apple', 'banana', 'carrot']
    },
    // actions/functtions
    reducers:{

        loginHogya(puranaData, newData){

            puranaData.loggedUser =  newData.payload;

        },

        addUser(puranaData, newData){
            console.log(newData);
            puranaData.data.push(newData.payload)
        },
        removeUser(puranaData, newData){
            puranaData.data.splice(newData.payload, 1);
        },
        updateUser(puranaData, newData){

            puranaData.data[newData.payload.meraIndex] = newData.payload.newFruit;

        }
    }
});

export default userSection;
export let {addUser, removeUser, updateUser, loginHogya} = userSection.actions;