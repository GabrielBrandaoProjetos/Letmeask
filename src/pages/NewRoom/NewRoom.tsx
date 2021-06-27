import { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/Button'
import { AuthContext } from '../../contexts/AuthContext'
import { database } from '../../services/firebase'

import * as Styled from './NewRoom.styles'

export function NewRoom(){
  const [newRoom, setNewRoom] = useState('')
  const {user, signOutWithGoogle} = useAuth()
  const history = useHistory()

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault()
    
    if(newRoom.trim() === ''){
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/admin/rooms/${firebaseRoom.key}`)
    
  }

  async function handleSignOut(){
    if(user){
      await signOutWithGoogle()
    }
    
    history.push('/')
  }

  
  return(
    <Styled.Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>          
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Nome da sala"
              value={newRoom}
              onChange={event => setNewRoom(event.target.value)}
            />
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </Styled.Container>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)

  return context
}