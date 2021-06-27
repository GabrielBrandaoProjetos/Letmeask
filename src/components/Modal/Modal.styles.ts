import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(5,2,6,0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: #F8F8F8;
  border-radius: 8px;  
  padding: 60px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg, path{
    width: 48px;
    height: 48px;
    stroke: #E73F5D;
    stroke-width: 2px;
  }

  .close{
    svg, path{
      stroke-width: 4px;
    }
  }
  
  strong{
    font: 700 24px 'Poppins', sans-serif;
    line-height: 34px;
    margin-top: 24px;
  }

  p{
    font-size: 16px;
    color: #737380;
  }

  div{
    display: flex;
    margin-top: 40px;
    font-size: 16px;
    gap: 8px;

    button{
      padding: 15px 30px;
      border-radius: 8px;
      border: transparent;
      cursor: pointer;
    }

    .cancel{
      background: #DBDCDD;
      color: #737380;
    }

    .delete{
      background: #E73F5D;
      color: #FEFEFE;
    }
  }

  @media(max-width: 700px){
    padding: 60px 60px;
  }

  @media(max-width: 700px){
    padding: 20px 20px;
  }

  @media(max-width: 450px){
    text-align: center;
    margin: 24px;

    svg, path{
      width: 30px;
      height: 30px;
    }

    strong{
      font-size: 22px;
      margin-top: 20px;
    }

    p{
      font-size: 14px;
    }

    div button{
      font-size: 14px;
      padding: 10px 20px;
    }
  }
`