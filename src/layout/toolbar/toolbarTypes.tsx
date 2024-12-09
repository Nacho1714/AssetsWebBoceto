import CustomToolbar from './CustomToolbar'; // Ajusta el path según tu estructura
import CustomToolbarOther from './CustomToolbarOther';

export const toolbarConfig = {
    default: () => null, // Cambia el JSX vacío a un componente funcional
    register: CustomToolbar, // Referencia directamente el componente, no su instancia JSX
    other: CustomToolbarOther,
};

// Ajustamos el tipo
export type ToolbarType = keyof typeof toolbarConfig;

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : never;

export type ToolbarPropsByType = {
    [K in ToolbarType]: ExtractProps<typeof toolbarConfig[K]>;
};

// Generamos los nombres directamente a partir de las claves
export const ToolbarNames: Record<ToolbarType, ToolbarType> = Object.keys(toolbarConfig).reduce((acc, key) => {
    acc[key as ToolbarType] = key as ToolbarType;
    return acc;
}, {} as Record<ToolbarType, ToolbarType>);