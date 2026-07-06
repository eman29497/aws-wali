"use client";
import { useState } from "react";
import "./tracker.css";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Tracker() {

// REDUX

   let {register, handleSubmit, formState:{errors}  } = useForm();
    const [discription, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [transactions, setTransactions] = useState([]);


    const creatsUser = async (newTrans)=> {
          let resp = await axios.post('/api/auth', {newTrans})
          console.log(resp.data);
        }

    async function addTrans(meraData) {
        
        const newTrans = {
            discription: meraData.discription,
            amount: Number(meraData.amount)
        };

        
        await creatsUser(newTrans);
        setTransactions([...transactions, newTrans]);
        // setDescription("");
        // setAmount("");
        reset({
            discription :"",
             amount:0
            });
       
    }

    function deleteTrans(index) {
        setTransactions((prev) => prev.filter((_, i) => i !== index));
    }

    const balance = transactions.reduce(
        (total, item) => total + Number(item.amount),
        0
    );

    const income = transactions
        .filter((item) => Number(item.amount) > 0)
        .reduce((total, item) => total + Number(item.amount), 0);

    const expense = transactions
        .filter((item) => Number(item.amount) < 0)
        .reduce((total, item) => total - Number(item.amount), 0);

         

    return (
        <div className="container">
            <div>
                <h2>Expense Tracker</h2>
                <div>
                    <h4>Your balance <br />$Number({balance})</h4>
                </div>


                <div id="Expense-cont">
                    <h4>INCOME
                        <br />
                        <span className="income-amount">${income}</span>
                    </h4>
                    <h4>EXPENSE
                        <br />
                        <span className="expense-amount" >${expense}</span>
                    </h4>
                </div>


                <div id="history-cont">
                    <h4>History
                        <br />
                        <hr />
                    </h4>

                    <ul className="history-list">
                        {transactions.map((item, index) => (
                            <li className="history-item" key={index}>
                                <span>{item.discription}</span>
                                <span>{Number(item.amount)}</span>
                                <button onClick={() => deleteTrans(index)} className="delete-btn">X</button>
                            </li>
                        ))}
                    </ul>
                </div>



                <div>
                    <h4>Add New transactions
                        <br />
                        <hr />
                    </h4>
                <form onSubmit={handleSubmit(addTrans)}>
                    <label>
                        <h5>Discription<br/>
                            <input className="input-tag" type="text"   placeholder="Enter Text"
                                 {...register('discription', { required: true, validate : function(merivalue) {

                                     return !/\d/.test(merivalue);
                                    // let lowerCase = merivalue.toLowerCase();
                                //     if(merivalue.includes("!NaN") == false){
                                //            return false;
                                //     }else{
                                //         return true;
                                //     }
                                //  }                               
                                 }})} />
                                {errors.discription && errors.discription.type == "required" ? <div className="input-error">Please Enter Discription</div> : null}
                                {errors.discription && errors.discription.type == "validate" ? <div className="input-error">Number is not allowed</div> : null}
                                </h5>
                    </label>
                    <label>
                        <h5>Amount <br/> [negative-Expense, positive-amount]
                            <br/>
                            <input className="input-tag" type="number"   placeholder="Enter Amount"
                             {...register('amount',{required:true, validate:function(merivalue){
                                if(Number(!isNaN(merivalue))){
                                    return true;
                                }else{
                                    return false;
                                }
                             }})}  />
                            {errors.amount  ? <div className="input-error">Please Enter Amount</div>: null}
                            </h5>

                    </label>

                    <button className="button">Add transactions</button>
                    </form>
                </div>


            </div>
        </div>
    );
}
