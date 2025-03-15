import React from 'react';
import '../../styles/Cards.css';
import CardItem from '../common/CardItem';
import alzheimers_heatmap_example from '../../assets/alzheimers_heatmap_example.jpg';
import nerve_cell_example from '../../assets/nerve_cell_example.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Alzheimer's Disease and Cognitive Health</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={alzheimers_heatmap_example}
              text="Alzheimer's Disease Macro View"
              label='Macro'
              path='/Content'
            />
            <CardItem
              src={nerve_cell_example}
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
