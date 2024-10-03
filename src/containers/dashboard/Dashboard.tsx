/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './dashboard.module.scss';
import FlagItem from "./components/flag-items/FlagItems";
import UserDetails from "./components/user-details/UserDetails";
import { Images } from "@/assets/images/images";
import DataTable from "@/components/shared/data-table/DataTable";
import Box from '@/components/shared/box/Box';
import { ColumnDef, createColumnHelper, PaginationState } from '@tanstack/react-table';
import useFetch from '@/hooks/useFetch';
import { useEffect, useMemo, useState } from 'react';
import { TAB } from '@/enum/tabEnum';

const flagData = [
  { flagSrc: Images.usFlag, countryName: 'United States', data: '30k', percentage: 34, status: 'profit' },
  { flagSrc: Images.brFlag, countryName: 'Brazil', data: '26k', percentage: 21.8, status: 'loss' },
  { flagSrc: Images.auFlag, countryName: 'Australia', data: '17k', percentage: 89, status: 'loss' }
];

const Dashboard = () => {
  const BaseURL = import.meta.env.VITE_API_ENDPOINT_URL;
  const [activeTab, setActiveTab] = useState(TAB.ALL_ORDERS);
  const [pageCount, setPageCount] = useState(0);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });

  let limit = pageSize;

  useEffect(() => {
    if (data?.data) {
      const pgCount = Number(data.items) / pageSize;
      const modulus = Number(data.items) % pageSize;

      if (data.items)
        setPageCount(Number(modulus === 0 ? pgCount : parseInt(pgCount.toString(), 10) + 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  const queryParams = useMemo(() => ({
    limit,
    _page: pageIndex + 1,
    status: activeTab === TAB.COMPLETED ? 'Completed' : activeTab === TAB.CANCELLED ? 'Cancelled' : '',
  }), [activeTab, limit, pageIndex]);


  const { data } = useFetch(BaseURL + '/orders', queryParams);

  const columnHelper = createColumnHelper<any>();

  const columns: ColumnDef<any, any>[] = [
    columnHelper.accessor('id', {
      cell: info => '#' + info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.customer, {
      id: 'customer',
      cell: info => info.getValue(),
      header: () => <span>Customer</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('date', {
      header: () => 'Date',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('total', {
      header: () => <span>Total</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('method', {
      header: 'Method',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => {
        const statusValue = info.getValue();
        const statusColor = statusColors[statusValue] || 'black';
        return <p style={{ color: statusColor }} >{statusValue}</p>;
      },
      footer: info => info.column.id,
    }),
    {
      header: 'Action',
      cell: () => (
        <p role='button' style={{ color: 'var(--table-action-color)', cursor: 'pointer' }}>
          View Detail
        </p>
      ),
    }
  ]

  const statusColors: Record<string, string> = {
    Pending: 'orange',
    Completed: 'green',
    Cancelled: 'red',
  };

  useEffect(() => {
    if (data?.totalItems && limit) {
      const pgCount = Math.ceil(data.totalItems / limit);
      setPageCount(pgCount);
    }

  }, [data?.totalItems, limit]);


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
                <span className={styles['up']}>↑ 8.56%</span>
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
              <span className={styles['up']}>↑ 12%</span>
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
      <UserDetails activeTab={activeTab} setActiveTab={setActiveTab} />
      <DataTable
        data={data?.data || []}
        pageCount={pageCount}
        columns={columns}
        isLoading={false}
        hasPagination
        pageSize={pageSize}
        pageIndex={pageIndex}
        recordsTotal={data?.items}
        onPaginationChange={setPagination}
      />
      {/* {showView && <Modal isOpen={showView} />} */}
    </div>
  )
}

export default Dashboard
