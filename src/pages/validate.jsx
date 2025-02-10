import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Spinner } from "react-bootstrap"
import "./styles/auth.css"

const Validate = () => {
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState("")
  const navigate = useNavigate()

  // Recuperando os dados do localStorage
  const storedCode = localStorage.getItem('code')
  const storedUserData = JSON.parse(localStorage.getItem('userData'))

  // Assegure-se de que os dados estão disponíveis antes de usar
  const codeCorrect = storedCode || ""
  const userData = storedUserData || {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setLoading(true)

    if (code === codeCorrect) {
      try {
        let response = await fetch('http://localhost:8080/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })

        if (response.ok) {
          navigate("/signin")
        } else {
          console.log("Erro ao criar o usuário", response.status)
        }
      } catch (error) {
        console.log("Erro:", error.message)
      }
    } else {
      alert("Código inválido")
    }

    setLoading(false)
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Validação</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Código de Verificação</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o código de 6 dígitos"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
              required
            />
          </Form.Group>

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Validar"}
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Validate