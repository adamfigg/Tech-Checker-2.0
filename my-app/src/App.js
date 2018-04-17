import React, { Component } from 'react';
import './App.css';

import DB from './DB.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      companyList: []
    }
    this.loadCompanies = this.loadCompanies.bind(this);
  }

  loadCompanies() {
      this.setState({
        companyList: DB.data,
      }
      )
  }


  render() {
    return (

      <div>
        <h1>Welcome to Tech Checker</h1>

        <button hidden={this.state.companyList.length > 0} onClick=
          {this.loadCompanies} >Click for sweet companies</button>



        <ul>
          {this.state.companyList.map((company, i) => {
            return <li> This is a test. You could work at {company.name} if you know how to code with {company.techUsed} </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
