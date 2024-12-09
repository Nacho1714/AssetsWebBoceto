import { useReducer, ReactNode, useContext, createContext } from 'react';
import { authReducer } from '../../util/auth/authReducer';

// Interfaces
import { AuthAction, AuthContextProps, AuthState, AuthTypes, LoginClient } from '../../interface/auth';

// TODO: tipado

// Context
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// Provider
export const AuthProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    // Todo lo que definamos aca va a ser de caracter "global" para toda la app, "children" es la app

    const [state, dispatch] = useReducer(authReducer, {} as AuthState, (): AuthState => {
        const token = JSON.parse(localStorage.getItem('auth-token') || 'null');
        const user = JSON.parse(localStorage.getItem('user') || 'null');
        return {
            logged: !!token,
            token,
            user
        };
    });

    const login = (response: LoginClient) => {

        const { LoginClient } = response;
        const { user, token } = LoginClient;

        const action: AuthAction = { 
            type: AuthTypes.login, 
            payload: user
        };

        localStorage.setItem('auth-token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    };

    const signIn = () => {};

    const signOut = () => {

        const action: AuthAction = { 
            type: AuthTypes.logout,
            payload: null
        };

        localStorage.removeItem('auth-token');
        localStorage.removeItem('user');

        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{ ...state, login, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Use
export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthContext is not provided");
    return context;
};