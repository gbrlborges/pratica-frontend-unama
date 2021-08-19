import ReactInputMask from 'react-input-mask';

const TelComponent = ({option, ...outros}) => {
    return (
        <ReactInputMask Placeholder="(__)_____-____" mask={option === "Celular" ? "(99)99999-9999" : "(99)9999-9999"} {...outros}/>
    )
}
 
export default TelComponent;