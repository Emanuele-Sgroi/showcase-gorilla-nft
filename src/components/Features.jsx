import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed on Android Studio using Java and Firebase</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.java} iconText="Java" />
          <FeatureCard iconUrl={assets.firebase} iconText="Firebase" />
        </div>
      </div>
    </div>
  )
}

export default Features