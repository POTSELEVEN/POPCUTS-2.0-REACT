
import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
import 'stream-chat-react/dist/css/v2/index.css';
import '../styles/chat.css';

const chatClient = new StreamChat('vwszc4cqmua2');
const userToken = ' ';
// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibHVja3ktYnV0dGVyZmx5LTIifQ.wN4kjxBFHsvQTitEJ7DlG4VpgK-aULw1KK61TRn49is';



chatClient.connectUser(
  {
    id: 'lucky-butterfly-2',
    name: 'lucky-butterfly-2',
    image: 'https://getstream.io/random_png/?id=lucky-butterfly-2&name=lucky-butterfly-2',
  },

  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['lucky-butterfly-2', 'lucky-butterfly-1'],
});

export const ChatCard = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);


