import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <div>
          <button>Stack</button>
          <button>Queue</button>
          <button>Binary Search</button>
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