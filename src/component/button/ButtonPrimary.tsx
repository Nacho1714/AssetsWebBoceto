import { Button } from '@mui/material';

interface ButtonPrimaryProps {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPrimary({ label, onClick }: ButtonPrimaryProps) {

    return (
        <Button
            sx={{ width: '100%' }}
            size='large'
            variant="contained"
            onClick={onClick}
        >
            {label}
        </Button>
    );
}