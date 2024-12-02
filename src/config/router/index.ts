import { Navigation } from "@toolpad/core";

// Pages
import Home from "../../pages/home/Home"

import Icons from "../../icons";

export const whiteList = [
    {
        title: 'Inicio',
        path: '/',
        icon: Icons.Home,
        component: Home,
        loader: null,
    },
]

// Toolpad
export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Menú',
    },
    ...whiteList.map((list) => ({
        title: list.title,
        icon: list.icon,
    }))
]