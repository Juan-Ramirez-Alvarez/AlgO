// React
import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header.js';

class Footer extends React.Component {
  render() {
    return (
      <div>I am footer</div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>I am  main</div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodytag: <Main/>,
    };
    this.updateBodyTag = this.updateBodyTag.bind(this);
  }

  updateBodyTag(tag) {
    this.setState(
      {
        bodytag: tag
      }
    )
  }

  render() {
      return (
        <div>
          <Header
            update={this.updateBodyTag}
          />
          {this.state.bodytag}
          <Footer/>
        </div>
      );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
