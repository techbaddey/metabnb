import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import metaLogoLight from '../assets/metalight.svg';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={metaLogoLight} alt='footer logo' />
          <div className={styles.social}>
            <img src={facebook} alt='facebook icon' />
            <img src={instagram} alt='instagram icon' />
            <img src={twitter} alt='twitter icon' />
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.community}>
            <ul>
              <h3>Community</h3>
              <li>NTF</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className={styles.places}>
            <ul>
              <h3>Places</h3>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn More</li>
            </ul>
          </div>
          <div className={styles.about}>
            <ul>
              <h3>About us</h3>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p> &#169; 2022 Metabnb</p>
      </div>
    </div>
  );
};

export default Footer;
