import { useState,useRef } from "react";

export function Contact()
{
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [msg,setMsg]=useState("")

    const nameRef=useRef()
    const mobileRef=useRef()
    const emailRef=useRef()
    const msgRef=useRef()

    const handleSubmit=(event)=>
    {
            event.preventDefault()
            alert("Successfully Sent")

    }
    return(<>
    <form onSubmit={handleSubmit}>
            <h1>Contact Component</h1>
            <div className="alert alert-dark w-50 mx-auto p-4">
                <div className="mb-3">
                    <input ref={nameRef} className="form-control form-control-sm"
                        value={name}
                        onChange={function (event) {
                        setName(event.target.value);
                        }}
                        placeholder="Enter Name"
                        
                    />
                </div>
                <div className="mb-3">
                    <input className="form-control form-control-sm"
                        value={mobile}
                        ref={mobileRef}
                        onChange={function (event) {
                        setMobile(event.target.value);
                        }}
                        placeholder="Enter Mobile"
                        
                    />
                </div>
                <div className="mb-3">
                    <input className="form-control form-control-sm"
                        value={email}
                        ref={emailRef}
                        onChange={function (event) {
                        setEmail(event.target.value);
                        }}
                        placeholder="Enter Email-Id"
                        
                    />
                </div>
                <div className="mb-3">
                    <textarea className="form-control form-control-sm"
                      ref={msgRef}
                        onChange={function (event) {
                        setMsg(event.target.value);
                        }}
                        placeholder="Enter Message/Suggesion"
                        
                    >{msg}</textarea>
                </div>

                <button className="btn btn-danger">Send</button>

            </div>
    </form>
        </>)
}