import  StyledCard  from './styles/Card.styled'

export default function Card({ item: { id, title, body} }) {
  return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

 
  )
}
