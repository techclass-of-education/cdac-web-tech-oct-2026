import { useState,useRef, useEffect,useCallback, useMemo } from "react";
import { TextField } from "../components/FormElements";
import { TextAreaField } from "../components/FormElements";

export function Contact()
{
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [msg,setMsg]=useState("")
    const [accept,setAccept]=useState(false)
    const [sendBtnDisabled,setSendBtnDisabled]=useState(true)

    const nameRef=useRef()
    const mobileRef=useRef()
    const emailRef=useRef()
    const msgRef=useRef()
    const sendBtnRef=useRef()

    const handleSubmit=(event)=>
    {
            event.preventDefault()
            alert("Successfully Sent")
            nameRef.current.style.backgroundColor="navy"
            nameRef.current.style.color="white"

            mobileRef.current.style.backgroundColor="navy"
            mobileRef.current.style.color="white"

            emailRef.current.style.backgroundColor="navy"
            emailRef.current.style.color="white"

            msgRef.current.style.backgroundColor="navy"
            msgRef.current.style.color="white"
    }

    const handleAccept=(event)=>
    {
        if(!accept)
        {
            if(name && mobile && email && msg)
            {
                    setAccept(!accept)
            }
            else
            {
                alert("Fill all fields")
            }
        }
    }

    // const v=handleAccept()

    useEffect(function()
    {
        console.log("UseEffect....")
    },[handleAccept])

    return(<>
    <form onSubmit={handleSubmit}>

            <div className="alert alert-dark w-50 mx-auto p-4">
            <h1>Contact Form</h1>
            <hr/>
                <div className="mb-3">
                     <TextField 
                        pHolder="Enter Name"
                        stateFunction={setName}
                        stateVar={name}
                        refVar={nameRef}
                        />
                   
                </div>
                <div className="mb-3">

                        <TextField 
                        pHolder="Enter Mobile"
                        stateFunction={setMobile}
                        stateVar={mobile}
                        refVar={mobileRef}
                        />

                    {/* <input className="form-control form-control-sm"
                        value={mobile}
                        ref={mobileRef}
                        onChange={function (event) {
                               setMobile(event.target.value);
                        }}
                        placeholder="Enter Mobile"
                        
                    /> */}
                </div>
                <div className="mb-3">
                     <TextField 
                        pHolder="Enter Email-id"
                        stateFunction={setEmail}
                        stateVar={email}
                        refVar={emailRef}
                        />
                    {/* <input className="form-control form-control-sm"
                        value={email}
                        ref={emailRef}
                        onChange={function (event) {
                        setEmail(event.target.value);
                        }}
                        placeholder="Enter Email-Id"
                        
                    /> */}
                </div>
                <div className="mb-3">
                    <TextAreaField  pHolder="Enter Message/Suggesion"
                        stateFunction={setMsg}
                        stateVar={msg}
                        refVar={msgRef}/>
                    {/* <textarea className="form-control form-control-sm"
                      ref={msgRef}
                      defaultValue={msg}
                        onChange={function (event) {
                        setMsg(event.target.value);
                        }}
                        placeholder="Enter Message/Suggesion"
                        
                    ></textarea> */}
                </div>
                <div className="form-check mb-3">
                    <input checked={accept} onClick={handleAccept} 
                    className="form-check-input" type="checkbox"/>
                    <label className="form-check-label">
                        I accept
                    </label>
                </div>         
                <button disabled={sendBtnDisabled}  className="btn btn-danger">Send</button>

            </div>
    </form>
        </>)
}