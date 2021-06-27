import {ButtonHTMLAttributes} from 'react'

import * as Styled from './Button.styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps){
  return(
    <Styled.Button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  )
}
