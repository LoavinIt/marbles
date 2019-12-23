import React from 'react';
import RunList from './RunList';

export class RunItem extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        runs: []
      };
    this.addItem=this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newRun = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          runs: prevState.runs.concat(newRun)
        };
      });
    }
    this._inputElement.value = "";
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredRuns = this.state.runs.filter(function(run) {
      return (run.key !== key)
    })
    this.setState({
      runs: filteredRuns
    })
  }
  
  render() { 
      return (
        <div className="run-entry">
          <h2>Add Run</h2>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter run distance" />
            <button type="submit">Add</button>
          </form>
          <RunList 
            entries={this.state.runs} 
            delete={this.deleteItem}
          />
        </div>
      );
    }
  }

export default RunItem;