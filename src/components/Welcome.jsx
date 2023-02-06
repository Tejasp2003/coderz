import React from 'react'
import '../styles/Welcome.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Welcome() {

  const navigate = useNavigate();
  return (
    <Container>
    <TextBox>
        <h1><b>Welcome  to Our Community</b></h1>
        <h3>Your Community</h3>
        <h3> Knowns Best</h3>
        <h5> Get in touch with the people with the best tips.</h5>
        <Button>
    <button  onClick={()=>{
      navigate("/signup")
    }}>Sign up</button>
    <button onClick={()=>{
      navigate("/login")
    }}>Login</button>
    </Button>
        
    </TextBox>
   
    <Image>
         < img src='/images/image1.jpg' alt=''/>
    </Image>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  
`;
const TextBox = styled.div`
display:flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;

`;

const Button = styled.div`
  display:flex;

  align-items: center;
  flex-direction: row;
  
 & > button{
  
  width: 100px;
  height: 40px;
  background-color: lightpink;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px;
  margin-top: 20px;
  font-weight: bolder;
  

  
 }
`;

const Image = styled.div`

& > img{
  height: 450px;
  width: 550px;
  margin-left: 300px;
  contain: content;
}
 
`;

export default Welcome