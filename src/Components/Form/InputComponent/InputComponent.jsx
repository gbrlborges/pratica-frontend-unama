import "./Style.css";

export function InputComponent({ InputID, ...others }) {
    return(
        <div>
            <label className="TextLabel">{InputID}</label>
            <input type="text" {...others} />
        </div>
    )
}