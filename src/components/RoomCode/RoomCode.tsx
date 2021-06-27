import copyImg from '../../assets/images/copy.svg'

import * as Styled from './RoomCode.styles'

type RoomCodeProps = {
  code: string
}

export function RoomCode({code}: RoomCodeProps){
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return(
    <Styled.Button onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </Styled.Button>
  )
}