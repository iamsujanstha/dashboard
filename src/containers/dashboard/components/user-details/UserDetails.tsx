import { Images } from '@/assets/images/images'
import './userDetail.module.scss'
import styles from './userDetail.module.scss'
import Box from '@/components/shared/box/Box'


const tabs = [
  {
    id: 1,
    name: 'All Orders',
  },
  {
    id: 2,
    name: 'Completed',
  },
  {
    id: 3,
    name: 'Cancelled',
  }
]
const UserDetails = () => {
  return (
    <Box width='100%'>
      <main>
        <section>
          <img src={Images.Avatar} alt='user' width={50} height={50} />
          <div>
            <h1>Rebert Fox</h1>
            <p>rober@gmail.com</p>
          </div>
        </section>
        {/* <hr /> */}
        <section>
          <p>PERSONAL INFORMATION</p>
          <div>
            <p>Contact Number</p>
            <p>972938023</p>
          </div>
          <div>
            <p>Contact Number</p>
            <p>972938023</p>
          </div>
          <div>
            <p>Contact Number</p>
            <p>972938023</p>
          </div>
        </section>
        <section>
          <p>SHIPPING ADDRESS</p>
          <p>Address usa, 345X St. Lusia</p>
          <div className={styles.countContainer}>
            <div>
              <p>150</p>
              <span>Total Order</span>
            </div>
            <div>
              <p>150</p>
              <span>Total Order</span>
            </div>
            <div>
              <p>150</p>
              <span>Total Order</span>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          return (
            <div key={tab.id} role='tab' className={styles.tab}>
              {tab.name}
            </div>
          )
        })}
      </div>
    </Box>
  )
}

export default UserDetails