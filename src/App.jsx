import { useState } from 'react'
import './App.css'


function App() {
  const [selectedMovie, updateSelectedMovie] = useState('');
  const [enteredMovie, updateEnteredMovie] = useState('');

  async function GetMovie() {
    if (!enteredMovie) {
      alert('Enter a name atleast');
    }  
    else{
    const data = await fetch(`http://www.omdbapi.com/?t=${enteredMovie}&apikey=c1ef426c`);
    const res = await data.json();
    //console.log(res);
    updateSelectedMovie(res);
    
    }
  }



  return (
    <>
      <div>
        <input type="text" placeholder='Enter movie' onChange={(e) =>{updateEnteredMovie(e.target.value)}}/>
        <button onClick={GetMovie}>Search</button>
        <div>
          <img src={selectedMovie.Poster} alt="" style={{ width: "200px", borderRadius: "8px" }}/>
        </div>
        
        {selectedMovie && <p>Imdb Rating: {selectedMovie.imdbRating}</p>}
        {selectedMovie && <p>Genre: {selectedMovie.Genre} </p>}
        {selectedMovie && <p>Director: {selectedMovie.Director}</p>}
        {selectedMovie && <p>Plot: {selectedMovie.Plot}</p>}
      </div>
    </>
  )
}

export default App
