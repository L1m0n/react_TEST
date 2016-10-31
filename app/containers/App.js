import React, {Component} from 'react';
import {connect} from 'react-redux';
import {jsonp} from '../services/jsonp.js';
import {changeLocation,
        setData,
        setDates,
        setTemps,
        setSelectedTemp,
        setSelectedDate
} from '../actions/actions.js';

require('./App.scss');
class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
       
  }

  componentDidMount(){
    
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);