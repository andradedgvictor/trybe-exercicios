export const REQUEST_CHARACTER = 'REQUEST_CHARACTERS';
export const REQUEST_CHARACTER_SUCCESS = 'REQUEST_CHARACTERS_SUCCESS';
export const REQUEST_CHARACTER_FAILURE = 'REQUEST_CHARACTERS_FAILURE';

export const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
});

export const requestCharacterFailure = (error) => (
  { type: REQUEST_CHARACTER_FAILURE, error }
);

export const requestCharacterSuccess = (character) => (
  { type: REQUEST_CHARACTER_SUCCESS, character }
);

export const actionFetchGetCharacter = (name) => async (dispatch) => {
  try {
    dispatch(requestCharacter());
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
    const data = await response.json();
    dispatch(requestCharacterSuccess(data));
  } catch (error) {
    dispatch(requestCharacterFailure(error));
  }
};
