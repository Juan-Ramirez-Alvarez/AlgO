import React from 'react';
import Table from 'react-bootstrap/Table';
import { render } from '@testing-library/react';

const bankSize = 10;

function getRandomNum() {
    return Math.trunc(Math.random() * 100);
}

function Bank(props) {
    return(
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td>{getRandomNum()}</td>
                        <td>{getRandomNum()}</td>
                        <td>{getRandomNum()}</td>
                    </tr>
                    <tr>
                        <td>{getRandomNum()}</td>
                        <td>{getRandomNum()}</td>
                        <td>{getRandomNum()}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
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
            </div>
        );
    }
}
