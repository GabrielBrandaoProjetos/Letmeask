import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Question } from '../../components/Question/Question'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import closingRoomImg from '../../assets/images/closing-room.svg'

import * as Styled from './AdminRoom.styles'
import { useModal } from '../../contexts/ModalContext'
import { useEffect } from 'react'
import { EmptyQuestions } from '../../components/EmptyQuestions/EmptyQuestions'

type RoomParams = {
  id: string
}

export function AdminRoom(){
  const {id: roomId} = useParams<RoomParams>()
  const {questions, title} = useRoom(roomId)
  const {openModal, responseModal, setResponseModal} = useModal()
  const history = useHistory()
  
  useEffect(() => {
    if(responseModal){
      history.push('/')
      setResponseModal(false)
    }
  }, [responseModal, history, setResponseModal])

  async function  handleCheckQuestionAsAnswered(questionId: string){
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string){
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  function handleDeleteQuestion(questionId: string) {
    openModal('deleteQuestion', roomId, questionId)
  }

  function handleEndRoom(){
    openModal('closeRoom', roomId)
  }

  return(
    <Styled.Container>
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala </Button>
            <button className="close-button" onClick={handleEndRoom}>
              <img src={closingRoomImg} alt="Encerrar sala" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        
        <div className="question-list">

          {questions[0] ? (
            questions.map((question) => {
              return(
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      >
                        <img src={checkImg} alt="Marcar pergunta como respondida" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              )
            })
          ) : (
            <EmptyQuestions>
              Envie o código desta sala para seus amigos e comece a responder perguntas!
            </EmptyQuestions>
          )}
        </div>
      </main>
    </Styled.Container>
  )
}