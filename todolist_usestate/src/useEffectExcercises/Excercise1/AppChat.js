
import { useState } from 'react';
import { useChatRoom } from './useChatRoom.js';

    function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    
    // custom useChatRoom Hook
    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl
    })

    return (
        <>
            <label>
                Server URL: {' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h2>Welcome to the {roomId} room!</h2>
        </>
    )
}


export default function ChatRoomServer() {

    const [roomId, setRoomId] = useState('general')
    const [show, setShow] = useState(false)

    return (
        <>
            <h2>Ex1: Connecting to a chat server</h2>
            <p>Try changing the roomId and serverUrl using the dropdown and the input, 
            and see how the Effect re-connects to the chat. Press “Close chat” to see the Effect disconnect one last time.</p>
            <i>Logic is extracted to a custom Hook</i>
            <br />
            <br />
            <label>
                Choose the chat room: {' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button
                onClick={() => setShow(!show)}
            >
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <br />}
            {show && <ChatRoom roomId={roomId} />}
        </>
    )
}