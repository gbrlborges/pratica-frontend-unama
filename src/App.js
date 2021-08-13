import React from 'react'
import './App.css'
import { InputComponent } from './Components/Form/InputComponent/InputComponent';
import { RadioComponent } from './Components/RadioComponent/RadioComponent';
import './Reset.css'

const App = () => {
  return( 
  <div className="form">
        <InputComponent InputID="Email"/>
        <InputComponent InputID="Confirme Email"/>
        <InputComponent InputID="Nome"/>
        <InputComponent InputID="Sobrenome"/>
        <InputComponent InputID="CPF"/>
        <InputComponent InputID="Telefone" />

        <section ClassName="GenderDate">
            <InputComponent InputID="Data de Nascimento" className="DataStyle"/>

            <RadioComponent Gender="Feminino"/>
            <RadioComponent Gender="Masculino"/>
            <RadioComponent Gender="Outros"/>
        </section>
  </div>
  )
};

export default App;