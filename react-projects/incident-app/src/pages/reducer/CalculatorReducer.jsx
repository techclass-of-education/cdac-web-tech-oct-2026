import { useState } from "react";
import { ButtonFieldReducer, IntTextField, TextField } from "../../components/FormElements";
import { useReducer } from "react";


export function CalculatorReducer() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
//   const [result, setResult] = useState(0);

  const initialStates={
    result:0
  }

  const reducer=(state,action)=>
  {
    const {n1,n2}=action.payload  //user input/payload

    switch(action.type) // add
    {
        case "add":
            return {...state,result:(n1+n2)}
        case "substract":
            return {...state,result:(n1-n2)}
        case "multiply":
            return {...state,result:(n1*n2)}
        case "divide":
            return {...state,result:(n1/n2)}
            
        case "pow":
            return {...state,result:(n1**n2)}

        case "mod":
            return {...state,result:(n1%n2)}

        case "fact":
           
            let f=1
            for(let i=1;i<=n1;i++)
            {
                f*=i
            }
            return {...state,result:f}
        default:
            return state  

    }
  }


//   function add() {
//     setResult(parseInt(n1) + parseInt(n2));
//   }

//   function substract() {
//     setResult(n1 - n2);
//   }

//   function multiplay() {
//     setResult(n1 * n2);
//   }

//   function divide() {
//     setResult(n1 / n2);
//   }

//   function power() {
//     setResult(n1 ** n2);
//   }

const [state,dispatch]=useReducer(reducer,initialStates)


  return (
    <>
      <div className="alert shadow-lg alert-secondary w-50 mx-auto">
        <h1>Result={state.result}</h1>
        <IntTextField
          stateFunction={setN1}
          stateVar={n1}
          pHolder={"Enter a value"}
        />
        <IntTextField
          pHolder={"Enter a value"}
          stateFunction={setN2}
          stateVar={n2}
        />

        <button onClick={()=>dispatch(
            {type:"add",payload:{n1,n2}}
            )}>Add</button>

        <button onClick={()=>dispatch(
            {type:"mod",payload:{n1,n2}}
            )}>Mod</button>

        <button onClick={()=>dispatch(
            {type:"fact",payload:{n1}}
            )}>Factorial</button>


        {/* <ButtonFieldReducer
          eventFunction={dispatch}
          isDisable={false}
          color={"primary"}
          text={"+"}
        />
        <ButtonFieldReducer
          eventFunction={dispatch}
          isDisable={false}
          color={"primary"}
          text={"-"}
        />
        <ButtonFieldReducer
          eventFunction={dispatch}
          isDisable={false}
          color={"danger"}
          text={"/"}
        />
        <ButtonFieldReducer
          eventFunction={dispatch}
          isDisable={false}
          color={"warning"}
          text={"x"}
        />
        <ButtonFieldReducer
          eventFunction={dispatch}
          isDisable={false}
          color={"warning"}
          text={"POW"}
        /> */}
      </div>
    </>
  );
}
