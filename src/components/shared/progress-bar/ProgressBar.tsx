import styles from './progressBar.module.scss'

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{
          left: percentage - 100 + "%",
          transition: "3s"
        }}
      />
    </div>
  );
};

export default ProgressBar;