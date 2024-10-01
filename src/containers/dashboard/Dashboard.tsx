import styles from './dashboard.module.scss';
import FlagItem from "./components/flag-items/FlagItems";
import UserDetails from "./components/user-details/UserDetails";
import { Images } from "@/assets/images/images";
import DataTable from "@/components/shared/data-table/DataTable";
import Box from '@/components/shared/box/Box';
import { createColumnHelper } from '@tanstack/react-table';


const Dashboard = () => {

  const flagData = [
    { flagSrc: Images.usFlag, countryName: 'United States', data: '30k', percentage: 34, status: 'profit' },
    { flagSrc: Images.brFlag, countryName: 'Brazil', data: '26k', percentage: 21.8, status: 'loss' },
    { flagSrc: Images.auFlag, countryName: 'Australia', data: '17k', percentage: 89, status: 'loss' }
  ];


  type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }

  const defaultData: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]

  const columnHelper = createColumnHelper<Person>()

  const columns = [
    columnHelper.accessor('firstName', {
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
      header: () => 'Age',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('visits', {
      header: () => <span>Visits</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      footer: info => info.column.id,
    }),
  ]

  return (
    <div className={styles.container}>
      <Box width="398px">
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
      </Box>
      <Box>
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
      </Box>

      <Box width="428px">
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
      </Box>
      <UserDetails />
      <DataTable
        data={defaultData}
        columns={columns}
        isLoading={false}
        hasPagination
      />
    </div>
  )
}

export default Dashboard