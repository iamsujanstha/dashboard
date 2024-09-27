
import Header from '@/components/shared/header/Header'
import Dashboard from '@/containers/dashboard/Dashboard'
import MainLayout from '@/layouts/main/MainLayout'


const DashboardPage = () => {
  return (
    <MainLayout>
      <Header />
      <Dashboard />
    </MainLayout>
  )
}

export default DashboardPage