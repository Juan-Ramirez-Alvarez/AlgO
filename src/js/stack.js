import React from 'react';
import Table from 'react-bootstrap/Table';
import { render } from '@testing-library/react';

const bankSize = 10;

function getRandomNum() {
    return Math.trunc(Math.random() * 100);
}

function Bank(props) {
    var rows = []

    // read each individual table row into the rows array; there will be exactly lengthRow items per row
    // this for loop assumes that bankArray.length will be cleanly divisible by lengthRow, otherwise numbers 
    // will be truncated from the final table
    var lengthRow = 5
    var start = 0
    for(var i = 1; i <= props.bankArray.length; i++) {
        if(i % lengthRow === 0) {
            var row = getTableRow(props.bankArray.slice(start, i))
            rows.push(<tr>{row}</tr>);
            start = i;
        }
    }

    return (
        <Table className="table-hover table-striped table-bordered">
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

function getTableRow(items) {
    return items.map(function (item, i) {
        return (
            <td key={i}> {item} </td>
        );
    });
}

export class Stack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stackArray: new Array(1).fill(getRandomNum()),
          bankArray: Array.from({length: bankSize}, (_, randNum) => (getRandomNum()))
        };
    }

    render() {
        return (
            <div>
              {this.state.stackArray}
              <Bank bankArray={this.state.bankArray} />
            </div>
        );
    }
}
