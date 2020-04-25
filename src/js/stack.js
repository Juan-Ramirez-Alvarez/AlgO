import React from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css";

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
            rows.push(<tr key={i}>{row}</tr>);
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

    // fuck it
    function getTableRow(items) {
        return items.map(function (item, i) {
            return (
                <td key={i} className="bankItem"> {item} </td>
            );
        });
    }
}

function Stack(props) {
    var listItems = []
    var keyIndex = 0;
    props.stackArray.slice().reverse().forEach(function(x) {
        listItems.push(<ListGroup.Item className="stackItem" key={keyIndex++}>{x}</ListGroup.Item>)
    })

    return (
        <div className="builtStack">
                  <ListGroup>
                      {listItems}
                  </ListGroup>
        </div>
    );
}

export class StackController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stackArray: Array.from({length: 5}, (_, randNum) => (getRandomNum())),
          bankArray: Array.from({length: bankSize}, (_, randNum) => (getRandomNum()))
        };
    }

    render() {
        return (
            <div>
              <Stack stackArray={this.state.stackArray}/>
              <Bank bankArray={this.state.bankArray} />
            </div>
        );
    }
}
