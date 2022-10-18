import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  
  function changeNome(event){
    // console.log(event.target.value)
    setNome(event.target.value)
  }

  function changeIdade(event){
    // console.log(event.target.value)
    setIdade(event.target.value)
  }

  function changeEmail(event){
    // console.log(event.target.value)
    setEmail(event.target.value)
  }

  function onClickDados(){
    const dados = {
      nome: nome,
      idade: idade,
      email: email
    }
    console.log(dados)
    setNome('')
    setIdade('')
    setEmail('')
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input 
          type={'text'}
          value={nome}
          onChange={changeNome}/>
        </label>
        <label>
          Idade:
          <Input
          type={'number'}
          value={idade}
          onChange={changeIdade}/>
        </label>
        <label>
          E-mail:
          <Input 
          type={'email'}
          value={email}
          onChange={changeEmail}/>
        </label>
      <button onClick={onClickDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage