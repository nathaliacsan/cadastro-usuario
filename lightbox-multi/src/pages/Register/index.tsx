import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, FormEvent, useState } from 'react'

import './styles.scss'

import { validateName, validateEmail } from '../../utils/regex'

export function Register() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
  const [sendCupom, setSendCupom] = useState<boolean>(false)

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setName(value)
    setShowErrorMessage(false)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setEmail(value)
    setShowErrorMessage(false)
  }

  function verifyForm(event: FormEvent) {
    event.preventDefault()

    const validEmail = validateEmail.test(email)
    const validName = validateName.test(name)

    if (validEmail && validName) {
      setSendCupom(true)
    } else {
      setShowErrorMessage(true)
    }
  }

  return (
    // Dialog é uma lib de acessibilidade
    <Dialog.Root defaultOpen={true}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content
          className={`dialog-content ${
            sendCupom ? 'dialog-content--cupom' : 'dialog-content--cadastro'
          }`}
        >
          <Dialog.Close asChild>
            <a
              href="https://www.multilaser.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={`close-button ${sendCupom ? 'visible' : 'hidden'}`}
              >
                Fechar
              </button>
            </a>
          </Dialog.Close>
          <div className="box-form">
            <Dialog.Description className={sendCupom ? 'hidden' : 'visible'}>
              Cadastre-se e receba agora mesmo!
            </Dialog.Description>

            <form
              className={`form-register ${sendCupom ? 'hidden' : 'visible'}`}
            >
              <input
                type="text"
                placeholder="Nome completo:"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Seu e-mail:"
                value={email}
                onChange={handleEmailChange}
              />
              {showErrorMessage && (
                <p className="error-message">Preencha os campos corretamente</p>
              )}

              <button
                className="submit-button"
                type="submit"
                disabled={name.length === 0 || email.length === 0}
                onClick={verifyForm}
              >
                CADASTRE-SE
              </button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
