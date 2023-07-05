import { REQUEST_CHARACTER,
  REQUEST_CHARACTER_FAILURE,
  REQUEST_CHARACTER_SUCCESS } from '../actions';

const INITIAL_STATE = {
  character: [],
  isLoading: false,
};

const requestCharacter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CHARACTER:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_CHARACTER_SUCCESS:
    return {
      ...state,
      character: action.character[0],
      isLoading: false,
    };
  case REQUEST_CHARACTER_FAILURE:
    return {
      ...state,
      isLoading: false,
    };
  default: return state;
  }
};

export default requestCharacter;
