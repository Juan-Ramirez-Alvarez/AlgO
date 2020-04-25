// React
import React from 'react';
import {Header} from './header.js';
import {Footer} from './footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
class Main extends React.Component {
  render() {
    return (
      <div>I am  main</div>
    );
  }
}

export class App extends React.Component {
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
