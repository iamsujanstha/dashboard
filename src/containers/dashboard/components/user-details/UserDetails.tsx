/* eslint-disable no-unused-vars */
import { Images } from '@/assets/images/images'
import './userDetail.module.scss'
import styles from './userDetail.module.scss'
import Box from '@/components/shared/box/Box'
// import { TAB } from '@/enum/tabEnum'
// import { useState } from 'react'
import clsx from 'clsx'


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

interface IUserDetails {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
}
const UserDetails = ({ activeTab, setActiveTab }: IUserDetails) => {
  const handleTabClick = (id: number) => () => {
    setActiveTab(id)
  }

  return (
    <Box width='100%' height='221px'>
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
            <p>Date of Birth</p>
            <p>1 Jan, 1985</p>
          </div>
          <div>
            <p>Member Since</p>
            <p>3 March, 2023</p>
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
            <div key={tab.id} role='tab' className={clsx(styles.tab, (activeTab === tab.id) && styles.active)} onClick={handleTabClick(tab.id)}>
              {tab.name}
            </div>
          )
        })}
      </div>
    </Box>
  )
}

export default UserDetails