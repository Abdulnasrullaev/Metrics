import styled from 'styled-components'

export const Abouts = styled.div`
  width: 100%;
  .title{
    text-align: center;
    margin: 40px auto;
    font-size: 30px;
    span {
      font-size: 17px;
      
    }
  }
  .cards {
    
    display: grid;
    margin: 10px auto;
    width: 90%;
    .card {
      margin: 30px 0;
      
      display: flex;
      
      img {
        width: 90%;
      }
      .logos {
        font-size: 24px;
        margin: 0px 40px;
        .lorem {
          font-size: 17px;
        }
      }
    }
    .card2 {
      width: 96%;
      margin: 40px auto;
      display: flex;
      justify-content: space-between;
      .card-mini {
        width: 25%;
        margin: 0px 10px auto;
        .title2 {
          margin: 20px 1px;
          font-size:23px;
          text-transform: capitalize;
        }
      }
    }
  }
`

export const Detail = styled.div`
  width: 100%;
  background-color: #dde7ed; 
  padding-bottom: 50px;
  .start {
    position: relative;
    top: 30px;  
  
    margin: 20px 0;
    text-align: center;
  }
  center {
    margin: 50px 0;
  }
 .card-wraper{
   display: flex;
   justify-content: center;
   .card3{
       border-radius: 5px;
       width: 220px;
       background-color: #fff;
       margin:1px 30px;
       line-height: 36px;
       font-size: 16px;
       text-transform: capitalize;
       .titles{
           padding: 9px 15px;
           font-size: 22px;
       }
       .date{
           color:  #489FD9;
           font-size: 19px;
           width: fit-content;
           padding: 0px 15px;
           margin: -3px 0 0 0;
       }
    .email, .ios, .custom, .api{
        padding: 0px 15px;
        color: #C7C5C5;
      }
      .email{
        color: black;
        
      }
.btn{
    margin: 10px 10px;
    width:90%;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
    text-transform: capitalize;
    padding: 10px 0;
    align-items: center;
}
}
}
.more{
  text-align: center;
  padding: 33px 0;
  .us{
    color:  #489FD9;
  }
}
`

export const EndTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
.titlee{

  font-size: 29px;
  margin: 50px 0 10px 0;
}
.coment{
  font-size: 20px;
  margin: 20px auto;
  width: 50%;
}
.about{
  margin: 30px 0;
  line-height: 30px;
}
`;

export const Footer = styled.div`
  width: 100%;
  background: #2B2C2E;
  color: white;
  display: flex;
  .cards{
    margin: 90px 100px;
    line-height:30px;  
    .title{
      font-size: 30px;
    font-weight: 500;
    
    }
  .links{
    display: flex;
    justify-content:space-between;
  }
  }
`;
