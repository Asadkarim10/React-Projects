import React from 'react';
import './privatechat.css';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


class Avator extends React.Component {
render (){
    return(<div>
        <List>
      <ListItem
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      </List>
      </div>)
}
}

export default Avator;