import React from 'react';
import third from '../images/third.png';
import '../Styles/Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='text_div'>
            <h1>Your Personal Notebook is coming to digital now.</h1>
            <p>Write whatever you lived and what you thought.</p>
            <a href='#Note' ><button>Make a Note</button></a>
        </div>
        <div className='img_div'>
            <img alt='third' src={third} />
        </div>
    </div>
  )
}

export default Home;