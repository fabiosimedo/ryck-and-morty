import styled from 'styled-components'

const Section = styled.section`
  background-image: url('wallpaper.jpg');
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  border: solid .01rem green;
  border-radius: 8px;
  box-shadow: 5px 5px 50px -13px rgba(0,0,0,0.84);
  margin: 1rem auto;
  padding: 1rem auto;
  max-width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  background-color: #c7c7a76d;
  border: solid .01rem green;
  border-radius: 8px;
  box-shadow: 5px 5px 50px -13px rgba(0,0,0,0.84);
  margin: 1rem;
`
  
const Img = styled.img`
  border-radius: 8px;
  margin: 1rem;
  max-width: 100%;
  height: auto;
`


export {
  Section, Card, Img
} 