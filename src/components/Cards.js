import star from '../assets/star.svg';
import styles from './Cards.module.scss';

const Card = ({ name, img, night, distance, available }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt='place' />
      <div className={styles['place_container']}>
        <small className={styles.name}>{name}</small>
        <small className={styles.night}>{night}</small>
      </div>
      <div className={styles['distance_container']}>
        <small className={styles.distance}>{distance}</small>
        <small className={styles.available}>{available}</small>
      </div>
      <div className={styles.star}>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
      </div>
    </div>
  );
};

export default Card;
