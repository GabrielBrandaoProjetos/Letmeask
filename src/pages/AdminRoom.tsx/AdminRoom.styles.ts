import styled from 'styled-components'

export const Container = styled.div`
  header{
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      > div{
        display: flex;
        gap: 16px;
        
        .close-button{
          display: none;
        }

        button{
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px 0;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    .question-list{
      margin-top: 32px;
    }
  }

  @media(max-width: 840px){
    main .room-title{
      padding-left: 24px;
    }
  }

  @media(max-width: 630px){
    header .content >div .close-button{
      display: initial;

      background: transparent;
      border: none;
      cursor: pointer;

      border: 1px solid #835afd;
      height: 40px;
      border-radius: 8px;
      
      padding: 0 12px;
      font-size: 0;
      
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
`