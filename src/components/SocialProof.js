import { motion as m } from 'framer-motion';

import mbtoken from '../assets/mbtoken.svg';
import metamask from '../assets/metamask.svg';
import opensea from '../assets/opensea.svg';
import styles from './SocialProof.module.scss';

export const socialVariant = {
  initial: {
    opacity: 0,
    y: '100vw',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 120,
    },
  },
};
const SocialProof = () => {
  return (
    <m.div
      className={styles['social_proof']}
      variants={socialVariant}
      initial='initial'
      animate='animate'
    >
      <img src={mbtoken} alt='social_proof' />
      <img src={metamask} alt='social_proof' />
      <img src={opensea} alt='social_proof' />
    </m.div>
  );
};

export default SocialProof;
