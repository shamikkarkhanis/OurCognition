import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Alzheimer's Disease and Cognitive Health</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/brain-research.jpg'
              text="Dive deep into the science behind Alzheimer's disease"
              label='Research'
              path='/research'
            />
            <CardItem
              src='/images/cognitive-health.jpg'
              text="Understand the importance of cognitive health in aging"
              label='Awareness'
              path='/awareness'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/treatment-options.jpg'
              text="Learn about the latest treatment options and therapies"
              label='Treatment'
              path='/treatments'
            />
            <CardItem
              src='/images/prevention-strategies.jpg'
              text="Explore strategies for preventing Alzheimer's disease"
              label='Prevention'
              path='/prevention'
            />
            <CardItem
              src='/images/support-resources.jpg'
              text="Find resources for patients and caregivers"
              label='Support'
              path='/support'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
