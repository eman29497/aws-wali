"use client";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(function(){

        axios.get('/api/auth/abc').then(function(resp){
            console.log(resp.data);
            setUsers(resp.data);
        })


    }, []);

    const deleteUser = (index)=>{

        axios.delete('/api/auth/abc?c='+index).then(function(resp){
            console.log(resp.data);

            setUsers(users.filter(user=>user._id != index));
        })

    }


    const updateUser = (id)=>{

        let userName = prompt("Enter new name");

         axios.put('/api/auth/abc', {userName, id}).then(function(resp){
            console.log(resp.data);
            if(resp.data.abc){

                let target = users.find(user=>user._id == id);
                target.name = userName;

                setUsers([...users])
                
            }
        })

    }

  return (
    <div>
        <table border={1}>
            {
                users.map(function(user, meraIndex){
                    return <tr>
                        <td>{user.name}</td>
                        <td>
                            <button onClick={function(evt){
                                deleteUser(user._id);
                            }}>Delete User</button>

                               <button onClick={function(evt){
                                updateUser(user._id);
                            }}>Update User</button>
                        </td>
                    </tr>
                })
            }

        </table>
    
    </div>
  );
}
