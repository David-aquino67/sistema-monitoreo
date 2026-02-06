import { useState } from 'react';

export const useStatusActions = () => {
    const [loading, setLoading] = useState(null);
    const execute = async (actionFn, serverId) => {
        if (!actionFn) return;
        setLoading(serverId);
        try {
            await actionFn();
        } catch (error) {
            console.error("Error ejecutando acción:", error);
        } finally {
            setLoading(null);
        }
    };

    return { loading, execute };
};