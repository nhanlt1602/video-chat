import React, { Component } from 'react';
import './App.css';
import Call from './components/Call';
import ChannelForm from './components/ChannelForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChannelForm />
        <Call />
      </div>
    );
  }
}

export default App;
