import React, { createContext, useContext, useState } from 'react';

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    const [units] = useState([
        { id: 1, title: 'UMF 10', place: 'Norte', status: 'online', uptime: '10d', latency: 40, lastPing: new Date() },
    ]);

    return (
        <StatusContext.Provider value={{ units }}>
            {children}
        </StatusContext.Provider>
    );
};

export const useStatus = () => {
    const context = useContext(StatusContext);
    if (!context) throw new Error("useStatus debe usarse dentro de StatusProvider");
    return context;
};