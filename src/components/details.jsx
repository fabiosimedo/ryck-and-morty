import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Section, Card, Img} from './styled'

export default function Details() {
  let { userId } = useParams();

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character/${userId}`);
      const dataResp = await response.json();
      setData(dataResp)

    } catch(e) { console.log(e) }
  }

  return (
    <Section>
        {data && 
            <Card>
              <h2>{data.name}</h2>
              <Img src={data.image} alt={'Imagen de '+ data.name} />
              <div id='description'>
                <h4>Espécie: {data.species}</h4>
                <p>Situação: {data.status}</p>
                <Link to="/ryck-and-morty"  id='link'>Voltar</Link>
              </div>
            </Card>
        }  
    </Section>
  )
}

export {
  Details
}

