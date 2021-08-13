import { Fragment } from "react"
import "./Style.css"

export function RadioComponent({Gender}) {
    return(
        <Fragment>
            <label className="RadioLabel">
                <input type="radio"/>
                {Gender}
            </label>
        </Fragment>
    )
}