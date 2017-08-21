import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';
import { capitalize } from '../utils/helpers';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

class App extends Component {
  // dispatch an action
  // doThing = () => {
  //   this.props.dispatch(addRecipe({}))
  // }

  doThing = () => {
    this.props.selectRecipe({})
  }

  render() {
    console.log('Props', this.props);
    return (
      <div>
        Hello, World!
      </div>
    );
  }
}

/*
When you connect a component, that component will automatically be passed
Redux's dispatch() method.

The whole point of mapDispatchToProps() is to make it so you can
bind dispatch() to your action creators before they ever hit
your component.
*/

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

// map our redux state to our component props
// this function lets connect() know how to map the state into the component's list of props.
function mapStateToProps ({ calendar, food }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
        ? food[calendar[day][meal]]
        : null

        return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);  // connect returns a function to which we pass App into.  connect() connects a react component to the Redux store.
