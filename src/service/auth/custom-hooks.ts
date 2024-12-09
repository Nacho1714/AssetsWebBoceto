import { useMutation, MutationTuple } from "@apollo/client";

import AuthMutations from "./auth-mutations";
import { useSnackbar } from '../../context/snackbar/SnackbarContext';

// Interfaces
import { LoginClient, LoginClientInput } from "../../interface/auth";

// TODO: Tipar el retorno de authLogin
export const useAuthLogin = (): MutationTuple<LoginClient, LoginClientInput> => {
    const {showSnackbar} = useSnackbar();
    
    return useMutation<LoginClient, LoginClientInput>(AuthMutations.LOGIN, {
        onError: ({message}) => showSnackbar(message, 'error')
    });
}