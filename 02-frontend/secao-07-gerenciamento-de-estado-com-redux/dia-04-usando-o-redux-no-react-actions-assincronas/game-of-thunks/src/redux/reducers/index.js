import { combineReducers } from 'redux';

import requestCharacter from './getCharactersReducer';

const rootReducer = combineReducers({ requestCharacter });

export default rootReducer;
