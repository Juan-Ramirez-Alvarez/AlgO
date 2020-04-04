// React
var React = require('react');
var ReactDOM = require('react-dom');

class Square extends React.Component {
    render() {
      return (
        <h1>hello world!</h1>
      );
    }
}

ReactDOM.render(
    <Square />,
    document.getElementById('root')
);