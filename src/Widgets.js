import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  // news articles as a function
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__articles'>
      <div className='widgets__articleLeft'><FiberManualRecordIcon /></div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
        
    </div>
  );

  return (
    <div className='widgets'>

      {/* header component */}
      <div className='widgets__header'>
        <div className='widgets__headerTop'>
          <h2>Alpaca News</h2>
          <InfoIcon />
        </div>

        {/* sets news articles as a function */}
        {newsArticle('Man finds his will to live', 'Top news • 0 readers')}
        {newsArticle('World on verge of...', 'Top news • 99,384 readers')}
        {newsArticle('Cute dog stories', 'Top news • 152,495 readers')}
        {newsArticle('Pictures of snails', 'Top news • 89,736 readers')}
      </div>
    </div>
  )
}

export default Widgets