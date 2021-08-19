import React, { useState } from 'react'

import './Reset.css'
import './App.css'
import { InputComponent } from './Components/Form/InputComponent/InputComponent';
import { RadioComponent } from './Components/RadioComponent/RadioComponent';
import { SelectComponent } from './Components/SelectComponent/SelectComponent';
import CPFComponent from './Components/Form/InputComponent/CPFComponent';
import DataNascComponent from './Components/Form/InputComponent/DataNascComponent';
import TelComponent from './Components/Form/InputComponent/TelComponent';
//import ValidarEmail from './Utils/ValidarEmail';


const App = () => {
  const [Email, setEmail] = useState()
  const [ConfirmeEmail, setConfirmeEmail] = useState()
  const [Nome, setNome] = useState()
  const [Sobrenome, setSobrenome] = useState()
  const [cpf, setCpf] = useState()
  const [Telefone, setTel] = useState()
  const [DatadeNasc, setDatadeNasc] = useState()
  const [Genero, setGenero] = useState()
  const [option, setOption] = useState('Celular')
  //const [Emailerror, SetEmailError] = useState({EmailV: {valido:true, texto:''}})


  /*function OnChange(event) {
    const { name , value } = event.target;
    setValues({...value, [name]: values })
  }*/

  function OnSubmit(event) {
   event.preventDefault()
}

  return(
    <section>
      <form className="form" onSubmit={OnSubmit}>
        <InputComponent InputID="Email" 
        value = {Email}
        onChange={(event) => {
          setEmail(event.target.value)}}/>

        <InputComponent InputID="Confirme Email"
        value = {ConfirmeEmail}
        onChange={(event) => {
          setConfirmeEmail(event.target.value)}}/>

        <InputComponent InputID="Nome"
        value = {Nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        />

        <InputComponent InputID="Sobrenome"
        value = {Sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}/>

        <label>CPF</label>
        <CPFComponent
        value = {cpf}
        onChange={(event) => {
            setCpf(event.target.value)
            console.log(cpf);
          }}/>

        <div className="tel-div">
          <SelectComponent InputID="Telefone" 
          onChange={(event) => {
            setTel("")
            setOption(event.target.value)
          }}/>
          <TelComponent 
            option={option}
            value = {Telefone}
             onChange={(event) => {
              setTel(event.target.value)
          }}/>
        </div>

        <label className="Radio-title">Genero</label>
        <section className="Container">
          <div>
          <RadioComponent name ="radio-option" Gender="Feminino"
          value = {Genero}
          onChange={(event) => {
            setGenero(event.target.value)
          }}/>
          <RadioComponent name="radio-option" Gender="Masculino"
          value = {Genero}
          onChange={(event) => {
            setGenero(event.target.value)
          }}/>
          <RadioComponent name="radio-option" Gender="Outros"
          value = {Genero}
          onChange={(event) => {
            setGenero(event.target.value)
          }}/>
          </div>

          <div className="nasc-input">
            <label className="nasc-label">Data de nascimento</label>
            <DataNascComponent
              value = {DatadeNasc}
              onChange={(event) => {
                setDatadeNasc(event.target.value)
              }}/>
          </div>
        </section>
          <button>Concluir</button>
      </form>
        <div className="form2">
          <div className="print-div">
          <p>Email</p> {Email} 
          </div>

          <div className="print-div">
          <p>Nome Completo</p> {Nome} {Sobrenome}
          </div>

          <div className="print-div">
          <p>CPF</p>{cpf} 
          </div>

          <div className="print-div">
          <p>Tel</p> {option} {Telefone} 
          </div>

          <div className="print-div">
          <p>Data de Nascimento</p> {DatadeNasc}
          </div>

          <div className="print-div">
          <p>Gênero</p> {Genero}
          </div>
        </div>
    </section> 
        )}

export default App;