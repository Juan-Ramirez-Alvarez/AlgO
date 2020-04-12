import React from 'react';
import Button from 'react-bootstrap/Button';

export class Header extends React.Component {
  updateBodyTag(tag) {
    this.props.update(tag)
  }

  render() {
    return (
      <div>
          <Button onClick={() => this.updateBodyTag(<Stack />)}>Stack</Button>
          <Button onClick={() => this.updateBodyTag(<Queue />)}>Queue</Button>
          <Button onClick={() => this.updateBodyTag(<BinSearch />)}>Binary Search</Button>
      </div>
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

class Queue extends React.Component {
  render() {
    return (
      <div>I am queue</div>
    );
  }
}

class BinSearch extends React.Component {
  render() {
    return (
      <div>I am binary search</div>
    );
  }
}