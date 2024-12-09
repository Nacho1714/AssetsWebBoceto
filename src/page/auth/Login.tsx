import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/AuthContext';

/* service */
import { useAuthLogin } from '../../service/auth/custom-hooks';

// Material UI
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Image
import backgroundImage from '../../../public/assets/backgroundImage.jpg'
import { SignInPage } from '@toolpad/core';

export default function Login() {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [callbackUrl, SetCallbackUrl] = useState<any>('')

    const [Login, { data }] = useAuthLogin()

    const onLogin = async (formData: any) => {

        const email = formData.get('email') || ''
        const password = formData.get('password') || ''

        Login({
            variables: {
                loginClientInput: { email, password }
            }
        })
    };

    useEffect(() => {

        // if (!data) return

        // login(data);

        login({
            LoginClient: {
                token: 'string',
                user: {
                    id: "abc123xyz",
                    user_id: 101,
                    name: "Juan",
                    last_name: "Pérez",
                    email: "juan.perez@example.com",
                    phone: "1122334455",
                    roles: ["admin", "editor"],
                    gender: "male",
                    current_client: {
                        client_id: 2,
                        mongo_id: '2'
                    },
                    deleted_at: null,
                    last_login: new Date("2024-10-15T14:30:00Z"),
                    updated_at: new Date("2024-11-01T09:15:00Z"),
                    created_at: new Date("2024-01-01T10:00:00Z")
                }
            }
        });

        navigate(callbackUrl || '/', { replace: true });

    }, [data])

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#000000',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 31,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <SignInPage
                        providers={[{ id: 'credentials', name: 'Credentials' }]}
                        signIn={async (_, formData, callbackUrl) => {
                            await onLogin(formData);
                            SetCallbackUrl(callbackUrl)
                            return {};
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};