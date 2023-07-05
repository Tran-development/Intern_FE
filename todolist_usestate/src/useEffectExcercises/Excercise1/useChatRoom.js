
import { useEffect } from "react";
import { createConnection } from './chat.js'

export function useChatRoom({ serverUrl, roomId }) {
    
    //  goi setup khi deps thay doi 
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [serverUrl, roomId]);
}