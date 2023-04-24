import { React, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: max-content;
  height: max-content;
  background-color: white;
  border-radius: 30px;
  ${'' /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); */}
  padding: 16px;
  color: black;
  background-color: #99ABA6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  `
const Holder = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
${'' /* border:1px solid black; */}
width:100%;
margin-top: 1rem;`

const Input = styled.input`
  background-color: #FFFFFF;
  opacity: 0.6;
  ${'' /* border: 2px solid black; */}
  border-radius: 50px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  font-family: Poppins;
  font-color: #8B9A96;
`;
const Input2 = styled.input`
  background-color: #ffffff;
  opacity: 0.6;
  border: 2px solid black;
  border-radius: 50px;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 16px;
  background-image: url('.././twitter.svg');
  background-repeat: no-repeat;
  background-size: contain;
  font-color:#8B9A96;
  ${'' /* width: 100%; */}
  &:hover{
    ${'' /* border: 1px solid black; */}
    transition: 0.5s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const Input3 = styled.input`
  background-color: #ffffff;
  opacity: 0.6;
  border: 2px solid black;
  border-radius: 50px;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 16px;
  background-image: url('.././spotify.svg');
  background-repeat: no-repeat;
  background-size: contain;
  font-color:#8B9A96;
  ${'' /* width: 100%; */}
  &:hover{
    ${'' /* border: 1px solid black; */}
    transition: 0.5s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const Input4 = styled.input`
  background-color: #ffffff;
  opacity: 0.6;
  border: 2px solid black;
  border-radius: 50px;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 16px;
  background-image: url('.././sound.svg');
  background-repeat: no-repeat;
  background-size: contain;
  font-color:#8B9A96;
  ${'' /* width: 100%; */}
  &:hover{
    ${'' /* border: 1px solid black; */}
    transition: 0.5s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const Topic = styled.div`
display:flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
font-family: Poppins;
font-weight: bolder;
font-size: 1.5rem;`


const PlaceHolder = styled.div`
display: flex;
flex-direction: row;
`
const Handles = styled.div`
dispplay:flex;
flex-direction: column;
justify-content: space-between;
${'' /* border: 1px solid black; */}
`

const PlaceIcon = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
${'' /* border: 1px solid black; */}
padding:1rem;`

const Left = styled.div`
margin: 1rem;
border: 1px solid black;
`

const ProfilePic = styled.div`
display: flex;
felx-direction: column;
justify-content: center;
align-items: center;`

const Img = styled.img``

const Right = styled.div`
border: 1px solid black;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Poppins;
font-weight: bolder;
font-size: 1.5rem;
gap: 1rem;
`

const ProfHead = styled.div`
display: flex;
justify-content: center;
align-items: center;`

const Up = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: white;
    color: black;
  }
`
const Button2 = styled.button`
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`
const Bottom = styled.div`
display: flex;
justify-content: flex-end;
${'' /* width: 100%; */}
margin: 1rem;
gap: 1rem;`

const ArtistRegistration = () => {
  const [touch, setTouch] = useState(true);

  const handleClick = () => {
    setTouch(!touch);
  }

  return (
    <Container>
      <Up><Left>
        <Holder>
          <Topic>Name</Topic>
          <PlaceHolder> <Input
            placeholder="What should we call you?"
          /></PlaceHolder>
        </Holder>
        <Holder>
          <Topic>Email</Topic>
          <PlaceHolder><Input
            placeholder="we will ping you :)"
          /></PlaceHolder>
        </Holder>
        <Holder>
          <Topic>Short Bio</Topic>
          <PlaceHolder><Input
            placeholder="tell us about yourself"
          /></PlaceHolder>
        </Holder>
        <Holder>
          <Topic>Your Social Handles</Topic>
          <Handles>
            <PlaceIcon><Input2 /></PlaceIcon>
            <PlaceIcon><Input3 /></PlaceIcon>
            <PlaceIcon><Input4 /></PlaceIcon>
          </Handles>
        </Holder>
      </Left>

        <Right>
          <ProfHead>
            Profile Picture
          </ProfHead>
          <ProfilePic>
            <Img src='.././avatar.svg' />
          </ProfilePic></Right>
      </Up>
      <Bottom>
        <Button>Submit</Button>
        <Button2 onClick={handleClick}>Cancel</Button2>
      </Bottom>
      {touch && <Form showCard={setTouch}>
        <ArtistReg />
      </Form>}
    </Container>
  )
}

export default ArtistRegistration