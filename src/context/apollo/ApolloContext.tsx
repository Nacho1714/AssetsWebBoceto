import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider as BootApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ReactNode } from "react";

const httpLink = createHttpLink({ uri: import.meta.env.VITE_API_REST_URL });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('auth-token');
    const tokenWithoutQuotes = token?.replace(/"/g, ''); // Elimina las comillas
    const bearerToken = `Bearer ${tokenWithoutQuotes}`;

    return {
        headers: {
            ...headers,
            authorization: token ? bearerToken : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    connectToDevTools: true,
    cache: new InMemoryCache(),
});

// Provider
export const ApolloProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    return (
        <BootApolloProvider client={client}>
            {children}
        </BootApolloProvider>
    );
};