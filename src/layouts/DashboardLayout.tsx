import { Navigate, Outlet, useLocation }
 from 'react-router-dom';
import { DashboardLayout as BootDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

import { useAuthContext } from '../context/auth/AuthContext';

export default function DashboardLayout() {
    const { logged } = useAuthContext();
    const location = useLocation();
    
    return logged ? (
        <BootDashboardLayout>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </BootDashboardLayout>
    ) : <Navigate to={`/login?callbackUrl=${encodeURIComponent(location.pathname)}`} replace />
}