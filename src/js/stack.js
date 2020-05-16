import React from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDrag, useDrop } from 'react-dnd'
import { useSpring, animated } from 'react-spring'

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
            var row = getTableRow(props.bankArray.slice(start, i), i === lengthRow)
            rows.push(<tr key={i}>{row}</tr>);
            start = i;
        }
    }

    return (
        <Table className="table-hover table-striped banktable">
            <tbody>
                {rows}
            </tbody>
        </Table>
    );

    // fuck it
    // keeping track of getTableRow calls so we can have indices accounting for desired # rows
    // only works for 2 rows of 5 items
    function getTableRow(items, isFirstRow) {
        return items.map(function (item, i) {
            var index = i;
            if (!isFirstRow) {
                index += lengthRow;
            }
            return (
                <BankItem key={index} index={index} randnum={item}/>
            );
        });
    }
}

function BankItem(props){
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.BANKITEM, index:props.index},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    // only draggable if bankitem exists
    var refAttr = null;
    if (props.randnum != null)
        refAttr = drag;

    return (
        <td
            ref={refAttr}
            style={{opacity: isDragging ? 0.5 : 1}}
            className="bankItem">
                {props.randnum}
        </td>
    );
}

var isInitialized = 0;

function Stack(props){
    const [{trash1, trash2}, drop] = useDrop({
        accept: ItemTypes.BANKITEM,
        drop: item => props.bankToStack(item.index),
        collect: mon => ({
          isOver: !!mon.isOver(),
          canDrop: !!mon.canDrop(),
        }),
      })
    console.log(trash1,trash2);

    var listItems = []
    var keyIndex = 0;

    const [properties, set] = useSpring(() => (
        {
            opacity: 1, 
            onRest: () => AnimateAndPop()
        }))
    props.stackArray.slice().reverse().forEach(function(x) {
        // item pushed before it gets identifier removed
        // give it to the item we are pushing on the list
        var lastItemButton = null;
        if (keyIndex === 0) {
            lastItemButton = <button onClick={() => setFunc()}>click me</button>
            listItems.push(<animated.div>
                <ListGroup.Item className="stackItem" key={keyIndex++}>{x}{lastItemButton}</ListGroup.Item>
                </animated.div>);
        }
        else {
            listItems.push(<ListGroup.Item className="stackItem" key={keyIndex++}>{x}{lastItemButton}</ListGroup.Item>)
        }
    })

    return (
        <div ref={drop} id="builtStack">
            <ListGroup id="temp">
                {listItems}
            </ListGroup>
        </div>
    );

    function setFunc() {
        set({opacity: 0})
    }

    function AnimateAndPop ()
    {
        if (isInitialized > 0) {
            console.log("here123")
            
            alert("hello")
            set({opacity: 1});
            props.popFromStack();            
        }

        isInitialized += 1;
    }
}

export class StackController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stackArray: Array.from({length: 1}, (_, randNum) => (getRandomNum())),
          bankArray: Array.from({length: bankSize}, (_, randNum) => (getRandomNum()))
        };
    }

    bankToStack = (index) => {
        var stackClone = this.state.stackArray.slice();
        var bankClone = this.state.bankArray.slice();
        stackClone.push(this.state.bankArray[index]);
        bankClone[index] = null;

        this.setState({
            stackArray: stackClone,
            bankArray: bankClone,
        })
    }

    popFromStack = () => {
        var stackClone = this.state.stackArray.slice();
        var bankClone = this.state.bankArray.slice();

        var poppedItem = stackClone.pop();
        for (var i = 0; i < bankClone.length; i++) {
            if (bankClone[i] === null) {
                bankClone[i] = poppedItem;
                break;
            }
        }

        this.setState({
            stackArray: stackClone,
            bankArray: bankClone,
        })
    }

    render() {
        return (
            <div id="stackpageoutter">
                <div id="stackpage">
                    <Stack stackArray={this.state.stackArray} bankToStack={this.bankToStack}  popFromStack={this.popFromStack}/>
                    <Bank bankArray={this.state.bankArray} />
                </div>
            </div>
        );
    }
}
