import { Section, Card, Img} from './styled'
import { Link } from 'react-router-dom'

export default function Main({ mainData }) {

  return (
    <Section>
        {mainData && mainData.map(d => {
            return (
              <Card>
                <h2>{d.name}</h2>
                <Img src={d.image} alt={'Imagen de '+ d.name} />
                <div id='description'>
                  <h4>Espécie: {d.species}</h4>
                  <p>Situação: {d.status}</p>
                  <Link 
                    to={'/details/' + d.id} 
                    id='link'
                  >
                      Detalhes</Link>
                </div>
              </Card>
            ) 
          })
        }  
    </Section>
  )
}