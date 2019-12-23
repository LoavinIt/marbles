import React, { Component } from 'react';

class RunList extends Component {

    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
    }

    createTask(run) {
        return <li onClick={() => this.delete(run.key)}
                key={run.key}>{run.text}</li> 
    }

    delete(key) {
        this.props.delete(key);
    }

    render() { 
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);

        return (
            <div>
            <ul className="theList">
                {listItems}
            </ul>
            </div>
      );
    }
}

export default RunList;