import { createRoot } from 'react-dom/client'

import './index.css'

// Providers
import { AuthProvider } from './context/auth/AuthContext.tsx';
import { ApolloProvider } from './context/apollo/ApolloContext.tsx';
import { RouterProvider } from './context/router/RouterContext.tsx';
import { ThemeProvider } from './context/theme/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <ApolloProvider>
            {/* <ThemeProvider> */}
                <RouterProvider />
            {/* </ThemeProvider> */}
        </ApolloProvider>
    </AuthProvider>
)