import { Navigation } from "@toolpad/core";

// page
import Home from "../../page/home/Home"
import Claim from "../../page/claim/Claim";
import Company from "../../page/company/Company";

// Toolbar
import { ToolbarNames } from "../../layout/toolbar/toolbarTypes";

import Icons from "../../icon";

export const whiteList = [
    {
        title: 'Inicio',
        path: '/',
        segment: null,
        icon: Icons.Home,
        component: Home,
        loader: null,
    },
    {
        title: 'Reclamos',
        path: '/reclamos',
        segment: 'reclamos',
        icon: Icons.Feedback,
        component: Claim,
        loader: null,
        toolbarType: ToolbarNames.other
    },
    {
        title: 'Empresas',
        path: '/empresas',
        segment: 'empresas',
        icon: Icons.Business,
        component: Company,
        loader: null,
        toolbarType: ToolbarNames.register
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
        segment: list?.segment
    })) as Navigation
]