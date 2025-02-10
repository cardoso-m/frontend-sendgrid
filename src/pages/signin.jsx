"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Form, Spinner } from "react-bootstrap"
import "./styles/auth.css"

const SignIn = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Entrar</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Lembrar senha" className="text-muted" />
          </Form.Group>

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Entrar"}
          </button>
        </Form>
        <p className="text-center mt-3">
          Não possui uma conta?{" "}
          <Link to="/signup" className="auth-link">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn

