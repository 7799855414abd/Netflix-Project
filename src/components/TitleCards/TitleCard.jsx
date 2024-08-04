import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data'; // Ensure this is used or remove it if not needed
import { Link } from 'react-router-dom';

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTU1NDBkZGY0NDNhMDQ0MjA2NDcyZmMyODg1MWZjOCIsIm5iZiI6MTcyMTgwNTIxNC45MzAyNDgsInN1YiI6IjY1ZGY0ZGJhNzYxNDIxMDE4NWQ2MjcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wfAKfOKlERNfJDe3bhLW9g9JkhDU4RLoKnpeYdzNmE'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchUrl = `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`;
    
    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(data => setApiData(data.results))
      .catch(err => console.error(err));

    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);

    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;












// import React, { useEffect, useRef, useState } from 'react'
// import './TitleCard.css'
// import cards_data from '../../assets/cards/Cards_data'





// const TitleCard = ({title,category}) => {

//   const [apiData, setApiData] = useState([])
//   const cardsRef = useRef();

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTU1NDBkZGY0NDNhMDQ0MjA2NDcyZmMyODg1MWZjOCIsIm5iZiI6MTcyMTgwNTIxNC45MzAyNDgsInN1YiI6IjY1ZGY0ZGJhNzYxNDIxMDE4NWQ2MjcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wfAKfOKlERNfJDe3bhLW9g9JkhDU4RLoKnpeYdzNmE'
//     }
//   };
  
  

//   const handlewheel = (event) =>{
//     event.preventDefault;
//     cardsRef.current.scrollLeft += event.deltaY;
//  }
//  useEffect(()=>{
//   fetch(`https://api.themoviedb.org/3/movie/${category?category:now_playing}?language=en-US&page=1`, options)
//     .then(response => response.json())
//     .then(response =>setApiData(response.results))
//     .catch(err => console.error(err));

//    cardsRef.current.addEventListener('wheel',handlewheel);
//  },[])
 
//   return (
//     <div className='title-cards'>
//      <h2>{title?title:"Popular on netflix"}</h2>
//      <div className='card-list' ref={cardsRef}>
//        {apiData.map((card, index)=>{
//         return <div className='card' key={index}>
//          <img src={ `https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
//          <p>{card.original_title}</p>
//         </div>
//        })}
//      </div>
//     </div>
//   )
// }

// export default TitleCard