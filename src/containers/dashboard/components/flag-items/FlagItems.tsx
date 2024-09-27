import ProgressBar from '@/components/shared/progress-bar/ProgressBar';
import styles from './flagItems.module.scss'
import { Icons } from '@/utils/iconConfig';

interface IFlagItem {
  flagSrc: string;
  countryName: string;
  data: string;
  percentage: number;
  status: string;
}

const FlagItem = ({ flagSrc, countryName, data, percentage, status }: IFlagItem) => {
  return (
    <div className={styles.flagItem}>
      <img src={flagSrc} alt={`${countryName} Flag`} className={styles.flagIcon} width={40} height={40} />
      <div className={styles.flagText}>
        <span className={styles.data}>{data}</span>
        <span className={styles.countryName}>{countryName}</span>
      </div>
      <ProgressBar percentage={percentage} />
      <span className={styles.percentage}><Icons.DownIcon color={status === 'profit' ? 'green' : 'red'} />{percentage}%</span>
    </div>
  );
};

export default FlagItem;