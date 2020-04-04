// React
var React = require('react');
var ReactDOM = require('react-dom');

class Square extends React.Component {
    render() {
      return (
        <p>hello world!</p>
      );
    }
}

ReactDOM.render(
    <Square/>,
    document.getElementById('root')
);