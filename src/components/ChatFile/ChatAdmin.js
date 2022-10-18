import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const ChatAdmin = () => {
    return (
        <div>
            <ChatEngine
                projectID={'e78ee894-2af2-4f88-a44e-3193cd202a81'}
                userName='ShowCase'
                userSecret='avengers101'
                height='calc(100vh - 12px)'
            />
        </div>
    );
};

export default ChatAdmin;