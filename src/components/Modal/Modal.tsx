import { useModal } from '../../contexts/ModalContext'

import * as Styled from './Modal.styles'
import { database } from '../../services/firebase'

type ModalProps = {
  typeModal: string
  roomId: string,
  questionId?: string
}

export function Modal({typeModal, roomId, questionId}: ModalProps){
  const {closeModal, setResponseModal} = useModal()

  async function handleDeleteQuestion() {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove()
    closeModal()
  }

  async function handleEndRoom(){
    await database.ref(`/rooms/${roomId}`).update({
      closedAt: new Date(),
    })
    
    setResponseModal(true)
    closeModal()
  }


  return(
    <Styled.Overlay>
      <Styled.Container>
        {typeModal === "deleteQuestion" ? (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5.99988H5H21" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <strong>Excluir pergunta</strong>
            <p>Tem certeza que você deseja excluir esta pergunta?</p>
            <div>
              <button className="cancel" type="button" onClick={closeModal} >Cancelar</button>
              <button className="delete" type="button" onClick={handleDeleteQuestion} >Sim, excluir</button>
            </div>
          </>
        ) : (
          <>
            <svg className="close" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.66 18.3398L18.34 29.6598" stroke="#E73F5D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M29.66 29.6598L18.34 18.3398" stroke="#E73F5D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z" stroke="#E73F5D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <strong>Encerrar sala</strong>
            <p>Tem certeza que você deseja encerrar esta sala?</p>
            <div>
              <button className="cancel" type="button" onClick={closeModal} >Cancelar</button>
              <button className="delete" type="button" onClick={handleEndRoom}>Sim, encerrar</button>
            </div>
          </>
        )}
        
      </Styled.Container>
    </Styled.Overlay>
  )
}