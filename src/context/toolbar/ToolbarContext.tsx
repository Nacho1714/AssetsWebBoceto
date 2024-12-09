import React, { createContext, useContext, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { toolbarConfig, ToolbarNames, ToolbarPropsByType, ToolbarType } from "../../layout/toolbar/toolbarTypes";
import { whiteList } from "../../config/router";

interface ToolbarContextValue<T extends ToolbarType = ToolbarType> {
    toolbarType: T;
    customToolbar: React.ComponentType<ToolbarPropsByType[T]>; // Usamos el tipo inferido correcto
    setToolbarProps: React.Dispatch<React.SetStateAction<ToolbarPropsByType[T]>>;
    toolbarProps: ToolbarPropsByType[T];
}

// Context
const ToolbarContext = createContext<ToolbarContextValue | null>(null);

// Provider
export function ToolbarProvider({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    // Determina el tipo de toolbar dinámicamente según la ruta
    const toolbarType = useMemo(() => {
        const routeConfig = whiteList.find(route => route.path === location.pathname);
        return (routeConfig?.toolbarType || ToolbarNames.default) as ToolbarType;
    }, [location.pathname]);

    // Usa toolbarProps con el tipo correspondiente a toolbarType
    const [toolbarProps, setToolbarProps] = useState<ToolbarPropsByType[typeof toolbarType]>({} as ToolbarPropsByType[typeof toolbarType]);

    // Asegura que customToolbar tenga el tipo correcto
    const CustomToolbar = toolbarConfig[toolbarType] as React.ComponentType<ToolbarPropsByType[typeof toolbarType]>;

    const value: ToolbarContextValue<typeof toolbarType> = {
        toolbarType,
        customToolbar: CustomToolbar, // Se tipa explícitamente aquí
        toolbarProps,
        setToolbarProps,
    };

    return <ToolbarContext.Provider value={value}>{children}</ToolbarContext.Provider>;
}

// Use
export const useToolbar = <T extends ToolbarType = ToolbarType>(): ToolbarContextValue<T> => {
    const context = useContext(ToolbarContext);
    if (!context) throw new Error("ToolbarContext is not provided");
    return context as ToolbarContextValue<T>;
};