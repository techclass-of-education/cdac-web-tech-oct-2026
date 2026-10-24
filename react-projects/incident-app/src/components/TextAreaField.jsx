export function TextAreaField({pHolder,
                        stateFunction,
                        stateVar,
                        refVar})
{
    return(<textarea className="form-control form-control-sm"
                      ref={refVar}
                      defaultValue={stateVar}
                        onChange={function (event) {
                        stateFunction(event.target.value);
                        }}
                        placeholder={pHolder}
                        
                    ></textarea>)
}