import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, FormEvent, useState } from 'react'

import './styles.scss'

import { validateName, validateEmail } from '../../utils/regex'

export function Register() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setName(value)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setEmail(value)
  }

  // function handleSubmit (event: FormEvent) {
  //   event.preventDefault()

  //   if (validEmail) {
  //     console.log('valido')
  //   } else {
  //     console.log('n valido')
  //   }

  function verifyForm(event: FormEvent) {
    event.preventDefault()
    const validEmail = validateEmail.test(email)
    const validName = validateName.test(name)

    // if(validEmail && validName) {

    // }
  }

  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Close asChild>
            <button className="close-button">Fechar</button>
          </Dialog.Close>
          <div className="box-form">
            <Dialog.Description>
              Cadastre-se e receba agora mesmo!
            </Dialog.Description>

            <form className="form-register">
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
