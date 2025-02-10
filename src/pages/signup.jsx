"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Spinner } from "react-bootstrap"
import "./styles/auth.css"

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    let name = e.target.name.value
    let email = e.target.email.value
    let password = e.target.password.value
    let userData = { name, email, password }
  
    try {
      let response = await fetch('http://localhost:8080/sendCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
  
      const data = await response.json()
      const code = data.code
  
      // Armazenando os dados no localStorage
      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('code', code)
  
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        navigate("/validate")
      }, 2000)
    } catch (error) {
      console.log(error.message)
    }
  }
  


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Cadastre-se</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control name='name' type="text" placeholder="Digite seu nome" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control name='email' type="email" placeholder="Digite seu e-mail" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control name='password' type="password" placeholder="Digite sua senha" required />
          </Form.Group>

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Cadastrar"}
          </button>
        </Form>
        <p className="text-center mt-3">
          Já possui uma conta?{" "}
          <Link to="/signin" className="auth-link">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp

