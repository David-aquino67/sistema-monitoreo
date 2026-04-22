import { useState } from 'react';

export const useStatusActions = () => {
    const [loadingId, setLoadingId] = useState(null);

    const execute = async (id, actionFn) => {
        if (typeof actionFn !== 'function') {
            console.error("El segundo argumento de execute debe ser una función");
            return;
        }

        setLoadingId(id);
        try {
            await actionFn();
        } catch (error) {
            console.error("Error ejecutando acción:", error);
        } finally {
            setLoadingId(null);
        }
    };

    return { loadingId, execute };
};