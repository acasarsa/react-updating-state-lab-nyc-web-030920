// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClickHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  resolutionClickHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }  
      }
    });
  }
  
  
  render() {
    return (
      <div>
        <button onClick={this.bitrateClickHandler} className="bitrate"></button>
        <button onClick={this.resolutionClickHandler} className="resolution"></button>
      </div>
    );
  }
}

export default YouTubeDebugger;

