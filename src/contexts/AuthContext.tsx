import { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import {auth, firebase} from '../services/firebase'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextData = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
  signOutWithGoogle: () => Promise<void>
}

type AuthContextProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthContextProps ) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const {displayName, photoURL, uid} = user
  
        if(!displayName || !photoURL){
          throw new Error('Missing information from Google Account.')
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }

  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if(result.user){
      const {displayName, photoURL, uid} = result.user

      if(!displayName || !photoURL){
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  async function signOutWithGoogle(){
    auth.signOut()
  }

  return(
    <AuthContext.Provider value={{user, signInWithGoogle, signOutWithGoogle}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)

  return context
}