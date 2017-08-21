import { combineReducers } from 'redux';

import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

// create a food reducer to handle recipes
function food (state = {}, action ) {
  switch(action.type) {
    case ADD_RECIPE:
      const { recipe } = action
      return {
        ...state,
        [recipe.label]: recipe
      }
    default:
      return state;
  }
}

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

// make our reducer function

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR:
     return {
       ...state,  // keep the state the same
       [day]: {   // except for this specific day
         ...state[day], // keep the meals of this day the same
         [meal]: null,  // except for the specified meal
       }
     }
    default:
      return state  // return the initial state by default
  }
}

export default combineReducers({
  food,
  calendar,
});
