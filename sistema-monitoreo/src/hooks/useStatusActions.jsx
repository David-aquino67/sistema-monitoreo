import { useState } from 'react';

export const useStatusActions = () => {
    const [loading, setLoading] = useState(false);
    const execute = async (actionFn) => {
        if (!actionFn) return;
        setLoading(true);
        try {
            await actionFn();
        } catch (error) {
            console.error("Error ejecutando acción:", error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, execute };
};