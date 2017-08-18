import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

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
          [mail]: recipe.label,
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

export default calendar;
