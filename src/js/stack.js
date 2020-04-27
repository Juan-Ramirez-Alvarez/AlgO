import React from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDrag, useDrop } from 'react-dnd'

const bankSize = 10;

const ItemTypes = {
    BANKITEM: 'bankItem',
  }

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
        <Table className="table-hover table-striped">
            <tbody>
                {rows}
            </tbody>
        </Table>
    );

    // fuck it
    function getTableRow(items) {
        return items.map(function (item, i) {
            return (
                <BankItem key={i} randnum={item}/>
            );
        });
    }
}

function BankItem(props){
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.BANKITEM },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <td
            ref={drag}
            style={{opacity: isDragging ? 0.5 : 1}}
            className="bankItem">
                {props.randnum}
        </td>
    );
}

function Stack(props){
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.BANKITEM,
        drop: () => props.bankToStack(),
        collect: mon => ({
          isOver: !!mon.isOver(),
          canDrop: !!mon.canDrop(),
        }),
      })

    var listItems = []
    var keyIndex = 0;
    props.stackArray.slice().reverse().forEach(function(x) {
        listItems.push(<ListGroup.Item className="stackItem" key={keyIndex++}>{x}</ListGroup.Item>)
    })
    return (
        <div ref={drop} className="builtStack">
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
          stackArray: Array.from({length: 1}, (_, randNum) => (getRandomNum())),
          bankArray: Array.from({length: bankSize}, (_, randNum) => (getRandomNum()))
        };
    }

    bankToStack() {
        this.stackArray.push(69);
    }

    render() {
        return (
            <div>
              <Stack stackArray={this.state.stackArray} bankToStack={this.bankToStack} />
              <Bank bankArray={this.state.bankArray} />
            </div>
        );
    }
}
