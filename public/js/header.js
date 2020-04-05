import React from 'react';

export class Header extends React.Component {
  updateBodyTag(tag) {
    this.props.update(tag)
  }

  render() {
    return (
      <div>
          <button onClick={() => this.updateBodyTag(<Stack />)}>Stack</button>
          <button onClick={() => this.updateBodyTag(<Queue />)}>Queue</button>
          <button onClick={() => this.updateBodyTag(<BinSearch />)}>Binary Search</button>
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