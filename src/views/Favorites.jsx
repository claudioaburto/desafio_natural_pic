import { useContext } from 'react'
import Context from '../context/Context'
const Favorites = () => {
  const { photos } = useContext(Context)
  const contPhotos = photos.filter((photo) => photo.liked).length
  return (
    <div className='App'>
      <h1>Fotos Favoritas</h1>
      <div className='gallery p-3 grid-columns-4'>
        {contPhotos === 0
          ? (<p><span>No hay fotos Seleccionadas</span></p>)
          : (
              photos
                .filter((photo) => photo.liked)
                .map((photo, i) => <img src={photo.src} alt={photo.alt} key={i} />)
            )}
      </div>
    </div>
  )
}
export default Favorites
