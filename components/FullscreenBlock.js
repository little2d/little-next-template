import styles from 'styles/components/FullscreenBlock.module.scss';

const FullscreenBlock = ({ children }) => (
  <div className={styles.fullscreenBlock}>
    {children}
  </div>
);

export default FullscreenBlock;
