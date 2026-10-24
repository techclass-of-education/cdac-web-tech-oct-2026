export function TextField({pHolder,
                        stateFunction,
                        stateVar,
                        refVar}){
    return(<>
            <input className="form-control form-control-sm"
                        value={stateVar}
                        ref={refVar}
                        onChange={function (event) {
                        stateFunction(event.target.value);
                        }}
                        placeholder={pHolder}
                        
                    />
    </>)
}