// React
var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
  render() {
    return (
      <div>I am  header</div>
    );
  }
}

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

class Stack extends React.Component {
  render() {
    return (
      <div>I am stack</div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodytag: <Main/>,
    };
  }

  render() {
      return (
        <div>
          <Header />
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
