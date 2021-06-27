import { ReactNode } from 'react'
import emptyQuestionsImg from '../../assets/images/empty-questions.svg'
import * as Styled from './EmptyQuestions.styles'

type EmptyQuestionProps = {
  children: ReactNode
}

export function EmptyQuestions({children}: EmptyQuestionProps){
  return(
    <Styled.Container>
      <img src={emptyQuestionsImg} alt="Não há questões" />

      <strong>Nenhuma pergunta por aqui...</strong>
      <p>{children}</p>
    </Styled.Container>
  )
}