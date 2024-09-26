import MainLayout from '../../layouts/main/MainLayout'
import Dashboard from '../../containers/dashboard/Dashboard'
import Header from '../../components/shared/header/Header'

const DashboardPage = () => {
  return (
    <MainLayout>
      <Header />
      <Dashboard />
    </MainLayout>
  )
}

export default DashboardPage