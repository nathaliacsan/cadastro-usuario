import * as Dialog from '@radix-ui/react-dialog'

import './styles.scss'

export function Register() {
  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          {/* <Dialog.Title>Ganhe 5% OFF</Dialog.Title> */}
          <Dialog.Close asChild>
            <button className="close-button">Fechar</button>
          </Dialog.Close>
          <div className="box-form">
            <Dialog.Description>
              Cadastre-se e receba agora mesmo!
            </Dialog.Description>

            <form className="form-register">
              <input type="text" placeholder="Nome:" required />
              <input type="email" placeholder="Seu e-mail:" required />
            </form>

            <button>CADASTRE-SE</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
