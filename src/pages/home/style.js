import styled from 'styled-components'
import background from '../../assest/background.jpg'

export const NavBar = styled.div`
  width: 100%;
  
  position: fixed;
  z-index: 999;
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px lightgray;
  .logo {
    margin: 9px 100px;
    font-size: 34px;
  
  }
  nav {
    display: flex;
    list-style: none;
    text-transform: capitalize;
    margin: 20px 130px;
    li {
      margin: 0px 20px;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
  @media screen and (max-width:480px) {
    display: grid;
.logo{
  font-size: 25px;
  margin: 10px 90px;
}
nav{
  width:fit-content;
  display: flex;
  margin: 20px auto;
  li{
    margin: 20px 14px;
  }
  
}
  }
  @media screen and (max-width:768px) {
.logo{
  font-size: 28px;
  margin: 10px 90px;
}
nav{
  margin:20px auto;
  li{
    margin: 0px 14px;
  }
  
}
  }
`

export const Homepage = styled.div`
  width: 100%;
  background-image: url(${background});
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  .text{
      width: 40%;
      margin: 140px 100px;
      .logo{
          font-size: 36px;
          color: white;
          margin: 24px 0;
      }
      .detail{
          width: fit-content;
          color: white;
          margin: 20px 0;
      }
      .sign{
          color: white;
          border: none;
          padding: 10px 30px;
          text-transform: capitalize;
      background-color: black;
        }
      .learn{
          margin:-30px 140px;
      }
  }
  .line-graph{
      width: 40%;
      height: 292px;
  margin: 140px -50px;
  }
  @media screen and (max-width:480px) {
  width: 100%;
  height: 600px;
  display: grid;
  .text{
  width: 100%;

  margin: 90px auto;
  .logo{
    font-size: 30px;
  }
}
.line-graph{
  height: 80px;
margin: 10px auto;
}

.line-graph{
margin: 150px auto;
height: fit-content;
    }
  } 
 }
  @media screen and (max-width:768px) {
.text{
  width: 50%;
  margin: 120px auto;
  .logo{
    font-size: 30px;
  }
}
.line-graph{
margin: 150px auto;
height: fit-content;
}
  }
`
export const Title = styled.div`
 background-color: #3E5C50;
 display: flex;
 justify-content: center;
padding: 16px 0;
.layer1{
    height: fit-content;
    margin: 20px 10px;
}
img{
    margin: 0px 10px;
}
  @media screen and (max-width:768px) {
display: grid;
 }
`;
