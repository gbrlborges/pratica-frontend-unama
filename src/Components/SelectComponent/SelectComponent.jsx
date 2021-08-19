import './Style.css'

export function SelectComponent({InputID, ...outros}) {
    return(
        <div className="select-input-container">
            <label>{InputID}</label>
            <select {...outros} className="select-telefone">
                <option value="Celular"> Celular </option>
                <option value="Telefone"> Telefone </option>
            </select>
        </div>
    )
}