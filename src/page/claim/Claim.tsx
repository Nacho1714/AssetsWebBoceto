import { useEffect } from "react";
import { useToolbar } from "../../context/toolbar/ToolbarContext";

export default function Claim() {
    const { setToolbarProps } = useToolbar<"other">(); // Sin genérico

    useEffect(() => {
        setToolbarProps({
            titleButton: "Reclamo"
        });
    }, []);

    return <>Reclamos</>;
}