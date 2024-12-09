import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/auth/AuthContext'; // Ajusta el path según tu estructura
import { useToolbar } from '../context/toolbar/ToolbarContext'; // Ajusta el path según tu estructura
import { DashboardLayout as BootDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function DashboardLayout() {
    const { logged } = useAuthContext();
    const { customToolbar: CustomToolbar, toolbarProps } = useToolbar(); // Sin genérico
    const location = useLocation();

    return logged ? (
        <BootDashboardLayout>
            <PageContainer
                slotProps={{
                    toolbar: {
                        children: <CustomToolbar {...(toolbarProps || {})} />, // Evitar error de spread
                    },
                }}
            >
                <Outlet />
            </PageContainer>
        </BootDashboardLayout>
    ) : (
        <Navigate to={`/login?callbackUrl=${encodeURIComponent(location.pathname)}`} replace />
    );
}