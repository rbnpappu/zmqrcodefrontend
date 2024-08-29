import React, { useState } from 'react';
import styles from './module/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import plans from './resources/plans.json';
import PlansCard from './PlansCard';
import PlansCardForMobile from './PlansCardForMobile';
import mobileplans from './resources/mobileplans.json';

const BestOffers = () => {
    const chunkSize = 4;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const chunkSizeForMobile = 1;
    const [currentIndexForMobile, setCurrentIndexForMobile] = useState(0);
  
    // Function to handle the "Next" button click for desktop
    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + chunkSize) % plans.length;
        return newIndex;
      });
    };
  
    // Function to handle the "Previous" button click for desktop
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - chunkSize + plans.length) % plans.length;
        return newIndex;
      });
    };
  
    // Revised function to get visible plans for desktop with correct circular behavior
    const getVisiblePlans = () => {
      const visiblePlans = [];
      for (let i = 0; i < chunkSize; i++) {
        visiblePlans.push(plans[(currentIndex + i) % plans.length]);
      }
      return visiblePlans;
    };
  
    const visiblePlans = getVisiblePlans();
  // Function to handle the "Next" button click for mobile
  const handleNextForMobile = () => {
    setCurrentIndexForMobile((prevIndex) => {
      const newIndex = (prevIndex + chunkSizeForMobile) % mobileplans.length;
      return newIndex;
    });
  };

  // Function to handle the "Previous" button click for mobile
  const handlePreviousForMobile = () => {
    setCurrentIndexForMobile((prevIndex) => {
      const newIndex = (prevIndex - chunkSizeForMobile + mobileplans.length) % mobileplans.length;
      return newIndex;
    });
  };

  // Function to get visible plans for mobile
  const getVisiblePlansForMobile = () => {
    const endIndex = (currentIndexForMobile + chunkSizeForMobile) % mobileplans.length;
    if (endIndex > currentIndexForMobile) {
      return mobileplans.slice(currentIndexForMobile, endIndex);
    } else {
      return mobileplans.slice(currentIndexForMobile).concat(plans.slice(0, endIndex));
    }
  };

  const visiblePlansForMobile = getVisiblePlansForMobile();

  return (
    <div className={styles.BestOffersCard}>
      <div className={styles.BestOffersContainer}>
        <button onClick={handlePrevious} className='p-1'>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#1D91AA" />
        </button>
        <div className='flex flex-row p-[16px]'>
          {visiblePlans.map((item, index) => (
            <PlansCard key={index} props={item} />
          ))}
        </div>
        <button onClick={handleNext} className='p-1'>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="#1D91AA" />
        </button>
      </div>
      <div className={styles.BestOffersContainerForMobile}>
        <button onClick={handlePreviousForMobile} className='p-1'>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#1D91AA" />
        </button>
        <div className='flex flex-row p-[16px]'>
          {visiblePlansForMobile.map((item, index) => (
            <PlansCardForMobile key={index} props={item} />
          ))}
        </div>
        <button onClick={handleNextForMobile} className='p-1'>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="#1D91AA" />
        </button>
      </div>
    </div>
  );
}

export default BestOffers;
