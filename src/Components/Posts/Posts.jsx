import './style.css'

export const Posts = ({
  img,
  alt,
  name,
  status,
  species,
  gender,
  origin,
}) => {
  return (
    <>
      <img src={img} alt={`${alt}`} />
      <div className='description'>
        <h3>{name}</h3>
        <p>
          <span>Status: </span>
          {status}
        </p>
        <p>
          <span>Species:</span> {species}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Origin: </span>
          {origin}
        </p>
      </div>
    </>
  )
}
