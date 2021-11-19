import React, { Component } from 'react';
import AgoraRTC from 'agora-rtc-sdk';
let client = AgoraRTC.createClient({ mode: 'live', codec: 'h264' });

const USER_ID = Math.floor(Math.random() * 1000000001);

export default class Call extends Component {
  localStream = AgoraRTC.createStream({
    streamID: USER_ID,
    audio: true,
    video: true,
    screen: false,
  });

  componentDidMount() {
    this.initLocalStream();
    this.initClient();
  }

  initClient = () => {
    client.init(
      //   <YOUR_APP_ID>,
      function () {
        console.log('AgoraRTC client initialized');
      },
      function (err) {
        console.log('AgoraRTC client init failed', err);
      }
    );
  };

  initLocalStream = () => {
    let me = this;
    me.localStream.init(
      function () {
        console.log('getUserMedia successfully');
        me.localStream.play('agora_local');
      },
      function (err) {
        console.log('getUserMedia failed', err);
      }
    );
  };

  render() {
    return (
      <div>
        <div id="agora_local" style={{ width: '800px', height: '800px' }} />
      </div>
    );
  }
}
