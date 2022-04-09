import { Posts } from '../Posts/Posts'
import './style.css'
import imgbola from '../../images/mortySearch.png'

export const Main = ({ loadCharacter }) => {
  return (
    <main>
      {loadCharacter ? (
        loadCharacter.map((value, index) => (
          <div className='posts' key={index}>
            <Posts
              img={value.result.image}
              alt={value.result.name}
              name={value.result.name}
              status={value.result.status}
              species={value.result.species}
              gender={value.result.gender}
              origin={value.result.origin.name}
            />
          </div>
        ))
      ) : (
        <div class='not-find-search'>
          <h2>
            I COULDN'T FIND ANY RECORD OF THIS CHARACTER IN THE MULTIVERSE!!
          </h2>
          <img src={imgbola} alt='Morty Smith' />
        </div>
      )}
    </main>
  )
}
