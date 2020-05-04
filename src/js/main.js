// React
import React from 'react';
import {Header} from './header.js';
import {Footer} from './footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

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
        <DndProvider backend={Backend}>
          <div id="mainapp">
            <Header
              update={this.updateBodyTag}
            />
            {this.state.bodytag}
            <Footer/>
          </div>
        </DndProvider>
      );
    }
}
