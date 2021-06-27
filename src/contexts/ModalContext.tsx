import { createContext, ReactNode, useState, useContext} from "react";
import { Modal } from "../components/Modal/Modal";

type ModalContextData = {
  isModalOpen: boolean
  closeModal: () => void
  openModal: (typeModal: string, roomId: string, questionId?: string) => Promise<void>
  responseModal: boolean
  setResponseModal: (responseModal: boolean) => void
}

type ModalContextProps = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({children}: ModalContextProps ) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [typeModal, setTypeModal] = useState('')
  const [roomId, setRoomId] = useState('')
  const [questionId, setQuestionId] = useState('')
  const [responseModal, setResponseModal] = useState(false)

  async function openModal(typeModal: string, roomId: string, questionId?: string){
    setTypeModal(typeModal)
    setRoomId(roomId)
    questionId && setQuestionId(questionId)
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }
  
  return(
    <ModalContext.Provider value={{isModalOpen, closeModal, openModal, responseModal, setResponseModal}}>
      {children}
      {isModalOpen && (
        <Modal
          typeModal={typeModal}
          roomId={roomId}
          questionId={questionId}
        />
      )}
    </ModalContext.Provider>
  )
}

export function useModal(){
  const context = useContext(ModalContext)

  return context
}