const Card = ({auto}) => {
  const { marca, modelo } = auto;

  return (
    <div>
      <h4>Tu auto favorito es el {marca},  {modelo}</h4>
    </div>
  )
}

export default Card