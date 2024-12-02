import { ReactNode } from "react";
import { AppProvider as MuiAppProvider } from "@toolpad/core/react-router-dom";
import { Session } from "@toolpad/core";

import { NAVIGATION } from "../../config/router";

import { useAuthContext } from "../auth/AuthContext";
import { useThemeContext } from "../theme/ThemeContext";

const BRANDING = {
    title: 'My Toolpad Core App',
};

// Provider
export const AppProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    // const { theme } = useThemeContext();
    const { signIn, signOut, user } = useAuthContext();

    const session: Session = {
        user: {
            id: user?.id,
            name: user?.name,
            email: user?.email,
        }
    }

    return (
        <MuiAppProvider
            navigation={NAVIGATION}
            branding={BRANDING}
            authentication={{ signIn, signOut }}
            session={session}
            // theme={theme}
        >
            {children}
        </MuiAppProvider>
    )
}