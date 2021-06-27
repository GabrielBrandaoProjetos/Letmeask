import styled from 'styled-components'

export const Button = styled.button` 
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #FFF;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined{
    background: #FFFFFF;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9)
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed
  }

  @media(max-width: 430px){
    height: 40px;
    font-size: 14px;
    padding: 0 24px;
  }

  @media(max-width: 630px){
    &.outlined{
      display: none;
    }
  }
`