import Footer from '../components/Footer';
import Header from '../components/Header';
import { cards } from '../components/Place';
import styles from '../components/Place.module.scss';
import settings from '../assets/setting.png';

const Place = () => {
  return (
    <>
      <Header />
      <div className={styles.row}>
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantasy city</li>
          <li>Beach</li>
          <li>Carbines</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <li className={styles.location}>
            <img src={settings} alt='settings icon' />
            <p>Location</p>
          </li>
        </ul>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>{cards}</div>
      </div>
      <Footer />
    </>
  );
};

export default Place;
