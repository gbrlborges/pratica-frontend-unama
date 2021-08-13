import "./Style.css";

export function InputComponent({ InputID, ...outros}) {
    return(
        <div>
            <label className="TextLabel">{InputID}</label>
            <input type="text"/>
        </div>
    )
}