import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img{
    max-width: 150px;
  }

  strong{
    font: 700 18px 'Poppins', sans-serif;
    line-height: 27px;
    margin: 16px 24px 0;
  }

  p{
    font-size: 14px;
    line-height: 20px;
    color: #737380;
    margin: 8px 24px;
  }

  @media(max-width: 600px){
    img{
      max-width: 120px;
    }
  }
` 