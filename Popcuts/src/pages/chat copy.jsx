
import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
import 'stream-chat-react/dist/css/v2/index.css';
import '../styles/chat.css';


import { StreamChat } from 'stream-chat';
// // if you're using common js
// const StreamChat = require('stream-chat').StreamChat;

// // instantiate your stream client using the API key and secret
// // the secret is only used server side and gives you full access to the API
// // find your API keys here https://getstream.io/dashboard/
// const serverClient = StreamChat.getInstance('gv3r4kdsse7s', 'h2sm9n3p3e9gwnzfb33dw56yr2yvz4q7styhengqeum9xvyun5drfm5cvapsk8fk');

// // generate a token for the user with id 'john'
// const token = serverClient.createToken('john');
// // next, hand this token to the client in your in your login or registration response

// // instantiate a new client (client side)
// const client = StreamChat.getInstance('gv3r4kdsse7s');

// const chatClient = new StreamChat('vwszc4cqmua2');

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibHVja3ktYnV0dGVyZmx5LTIifQ.wN4kjxBFHsvQTitEJ7DlG4VpgK-aULw1KK61TRn49is'



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
  members: ['lucky-butterfly-2',],
});

export const ChatCard2 = () => (
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


