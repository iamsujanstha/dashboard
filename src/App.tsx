import DashboardPage from '@/pages/dashboard/DashboardPage';
import './scss/main.scss';
import { SidebarProvider } from '@/providers/SidebarProvider';

function App() {
  return (
    <>
      <SidebarProvider>
        <DashboardPage />
      </SidebarProvider>
    </>
  );
}


export default App;