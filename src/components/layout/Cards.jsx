import React from 'react';
import '../../styles/Cards.css';
import CardItem from '../common/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Alzheimer's Disease and Cognitive Health</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='src/assets/alzheimers_heatmap_example.jpg'
              text="Alzheimer's Disease Macro View"
              label='Macro'
              path='/Content'
            />
            <CardItem
              src='src/assets/nerve_cell_example.jpg'
              text="Alzheimer's Disease Micro View"
              label='Micro'
              path='/Content'
            />

          </ul>
        </div>
      </div >
    </div >
  );
}

export default Cards;
