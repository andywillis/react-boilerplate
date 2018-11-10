// Dependencies
import React, { Component } from 'react';

// Style
import style from './style.css';

class App extends Component {

  state = {};

  componentDidMount() {
  	try {
  	fetch('api')
  	  .then(res => res.json())
      .then(data => {
      	if (data.transmit === 'success') {
          const { transmit } = data;
          this.setState({ transmit });
      	} else {
          this.setState({ transmit: 'error' });
          throw new Error('Server error.');
      	}
      });
    } catch (err) {
      console.err(err);
    }
  }

  render() {
  	const { transmit } = this.state;
    if (transmit) {
      return (
        <div className={style.app}>
          {`Server connection test: ${transmit}`}
        </div>
      )
    }
    return (
      <div className={style.app}>
        Connecting to API.
      </div>
    );
  }
}


export default App;
