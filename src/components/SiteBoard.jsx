import React from 'react'
import styled from 'styled-components'

const LogoHolder = styled.div`
margin: 20px;
border: 1px solid #156F65;
padding:20px;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
&:hover{
  cursor: pointer;
  border: 1px solid white;
}`
const ImageHolder = styled.div`
margin: 20px;`

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
background-color: #000;`

const Img = styled.img`
width: 500px;
height: 180px;
${'' /* rotate: 20deg; */}
&:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
    ${'' /* rotate: 5deg; */}
    cursor: pointer;
}
`
const Container = styled.div`
box-sizing: border-box;
width: 100%;
${'' /* border: 1px solid black; */}
margin-top: 1px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 2rem;`


const Img2 = styled.img`
width: 200px;
`

const Topics = styled.div`
margin: 0px 20px 0px 20px;
margin: 20px;
border: 1px solid #156F65;
padding:20px;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${'' /* border: 1px solid white; */}
${'' /* margin-top:3rem; */}
&:hover{
    border: 1px solid white;
    
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
}
`

const CopyRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
${'' /* background-color: #09131B; */}
${'' /* border:1px solid black; */}
width: 100%;
border-radius: 0px 0px 20px 20px;
background-color: #09131B;
`

const MapSite = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
${'' /* border: 1px solid black; */}
box-sizing: border-box;
margin-top: 5rem;
padding: 5rem;
border-radius: 20px 20px 0px 0px;
background-color: #09131B;
color: #99FFE3;
width:100%;
`

const Info = styled.div`
padding: 20px;
box-sizing: border-box;`

const List = styled.ul`
list-style-type: none;
text-align: center;`

const ListItem = styled.li`
margin:20px;
list-style-type: none;
text-align: center;
border-color: @`

const Head = styled.h1`
${'' /* display:flex;
${'' /* text-align: center; */}
position: relative;
justify-content: center; */}
align-items: center;
`

const SiteBoard = () => {
    return (
        <Section>
            <Container>
                <MapSite>
                    <LogoHolder><Img2 src='./BeatSpire.svg' />
                        <Info>The worlds first <br />digital
                            marketplace<br />
                            for crypto music<br /> collectibles and <br />musical non- <br />fungible tokens <br />(NFTs).</Info></LogoHolder>
                    <Topics>
                        <Head>Home</Head>
                        <List>
                            <ListItem>Experiece Music  & NFTs</ListItem>
                            <ListItem>Top NFTs</ListItem>
                            <ListItem>Sell your NFTs</ListItem>
                            <ListItem>Top Artists</ListItem>
                        </List>
                    </Topics>
                    <Topics>Music</Topics>
                    <Topics>Artists</Topics>
                    <Topics>Collections</Topics>
                    <Topics>Social Good</Topics>
                </MapSite>

                <CopyRight>
                    <ImageHolder><Img2 src='./Copyright 2023 BeatSpire.svg' /></ImageHolder>
                </CopyRight>
            </Container>
        </Section>

    )
}

export default SiteBoard