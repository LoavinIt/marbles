import React from 'react';
// import './../App.css';

export class ProjectList extends React.Component {
    
  constructor(props){
    super(props);
      this.state = {
        practiceDate: 'Tuesday'
      };
  }
  
  render() { 
      return (
        <div className="run-entry">
          <h2>Run Name</h2>
          <div>
            <label>Date</label>
            <span>{this.props.practiceDate}</span>
          </div>
          <div>
            <label>Distance</label>
            <span>{this.props.distance}</span>
          </div>
        </div>
      );
    }
  }
