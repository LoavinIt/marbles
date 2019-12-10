import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { RunItem } from './src/pages/RunItem'

function App() {
  return (
    <div className="page-wrap">
        <RunItem practiceDate="tuestday" />
    </div>
  );
}

export default App;
