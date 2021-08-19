import "./Style.css"

export function RadioComponent({Gender, ...others}) {
    return(
        <div className="RadioDiv">
            <label className="RadioLabel">
                <input type="radio" {...others}/>
                {Gender}
            </label>
        </div>
    )
}