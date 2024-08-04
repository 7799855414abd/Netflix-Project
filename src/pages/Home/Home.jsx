import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../../public/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../components/TitleCards/TitleCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt='Hero Banner' className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt='Hero Title' className='caption-img' />
          <p>
            When a user enters a URL in the web browser, the URLs in the `urls.py` file are compared and then the user receives the response for the requested URL after retrieving a corresponding view method.
          </p>
          <div className='hero-btns'>
            <button className='btn'>
              <img src={play_icon} alt='Play Icon' />
              Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt='Info Icon' />
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className='more-cards'>
        <TitleCard title="Blockbuster Movies" category="top_rated" />
        <TitleCard title="Only on Netflix" category="popular" />
        <TitleCard title="Upcoming" category="upcoming" />
        <TitleCard title="Top Picks for You" category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;









// import React from 'react';
// import './Home.css';
// import Navbar from '../../components/Navbar/Navbar';
// import hero_banner from '../../../public/hero_banner.jpg';
// import hero_title from '../../assets/hero_title.png';
// import play_icon from '../../assets/play_icon.png';
// import info_icon from '../../assets/info_icon.png';
// import TitleCard from '../../components/TitleCards/TitleCard';
// import Footer from '../../components/Footer/Footer';


// const Home = () => {
//   return (
//     <div className='home'>
//       <Navbar />
//       <div className='hero'>
//         <img src={hero_banner} alt='Hero Banner' className='banner-img' />
//         <div className='hero-caption'>
//           <img src={hero_title} alt='Hero Title' className='caption-img' />
//           <p>
//             When a user enters a URL in the web browser, the URLs in the `urls.py` file are compared and then the user receives the response for the requested URL after retrieving a corresponding view method.
//           </p>
//           <div className='hero-btns'>
//              <button className='btn'> <img  src={play_icon} alt="" />Play </button>
//              <button className='btn dark-btn'> <img  src={info_icon} alt="" />More Info </button>
//           </div>
//           <TitleCard  />
//         </div>
        
//       </div>
//        <div className='more-cards'>
//        <TitleCard title={"Blockbuster Movies"} category={'top_rated'}/>
//        <TitleCard title={"Oly on Netflix" } category={'popular'}/>
//        <TitleCard  title={"Upcomming" } category={"upcoming"}/>
//        <TitleCard title={"Top pics for you" } category={"now_playing"} />
//        </div>
//        <Footer/>
//     </div>
//   );
// };

// export default Home;
 
