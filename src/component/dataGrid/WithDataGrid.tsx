import React from 'react';
import { useQuery, DocumentNode } from '@apollo/client';
import { queries, columns } from '../../queries'; // Centralizado

interface WithDataGridProps {
    entity: string; // La entidad a cargar, como 'users' o 'products'.
}

const withDataGrid = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return ({ entity, ...props }: WithDataGridProps & P) => {
        const query: DocumentNode = queries[entity];
        const columnsForEntity = columns[entity];

        const { data, loading, error } = useQuery(query);

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return (
            <WrappedComponent
                {...(props as P)}
                rows={data?.results || []}
                columns={columnsForEntity}
            />
        );
    };
};

export default withDataGrid;
