import React from 'react';
import './binarySort.css';

class Column extends React.Component {

    constructor(props,height, width) {
        super(props)
        this.height = height;
        this.width = width;
    }

    render() {

        const style = {
            height : this.props.height,
            width : this.props.width,
            background: 'white',
        }
        return(
        <div class = "columnContainer">
            <div style = {style} class = 'column'>
            </div>
        </div>
        )
      
    }
}

export default Column;
