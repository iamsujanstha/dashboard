import Card from "../../components/shared/card/Card"
import styles from './style.module.scss';
import FlagItem from "./components/flag-items/FlagItems";
import UserDetails from "./components/user-details/UserDetails";
import { Images } from "@/assets/images/images";


const Dashboard = () => {

  const flagData = [
    { flagSrc: Images.usFlag, countryName: 'United States', data: '30k', percentage: 34, status: 'profit' },
    { flagSrc: Images.brFlag, countryName: 'Brazil', data: '26k', percentage: 21.8, status: 'loss' },
    { flagSrc: Images.auFlag, countryName: 'Australia', data: '17k', percentage: 89, status: 'loss' }
  ];

  return (
    <div className={styles.container}>
      <Card width="398px">
        <div className={styles.salesCard}>
          <img src={Images.financeImage} alt="finance growth" width={73} height={73} />
          <hr />
          <div className={styles.salesContent}>
            <div className={styles.header}>
              <div>
                <h1 className={styles.title}>Total Sales & Costs</h1>
                <p>Last 7 days</p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.mainValue}>$350K</div>
              <div className={styles.trend}>
                <span className={styles['up' || '']}>↑ 8.56%</span>
                <span>vs last 7 days</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className={styles.profitContent}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <img src={Images.yenImage} alt="Yen Currency" width={43} height={43} />
            </div>
            <div>
              <h1 className={styles.title}>Total Profit</h1>
              <p>Last 7 days</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.mainValue}>$50K</div>
            <div className={styles.trend}>
              <span className={styles['up' || '']}>↑ 12%</span>
              <span>vs last 7 days</span>
            </div>
          </div>
        </div>
      </Card>

      <Card width="428px">
        {flagData.map((item, index) => (
          <FlagItem
            key={index}
            flagSrc={item.flagSrc}
            countryName={item.countryName}
            data={item.data}
            percentage={item.percentage}
            status={item.status}
          />
        ))}
      </Card>
      <UserDetails />
    </div>
  )
}

export default Dashboard