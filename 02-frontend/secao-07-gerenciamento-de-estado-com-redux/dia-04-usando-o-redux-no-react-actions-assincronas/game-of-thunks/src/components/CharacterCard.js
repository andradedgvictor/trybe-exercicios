import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() {
    const { character, loading, error } = this.props;
    if (!loading && character) {
      return (
        <ul>
          <li>
            Name:
            {' '}
            {character.name}
          </li>
          <li>
            Born:
            {' '}
            {character.born}
          </li>
          <li>
            Titles:
            <ol>
              {character.titles.map((title, index) => (
                <li key={ `${title}-${index}` }>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {character.aliases.map((alias, index) => (
                <li key={ `${alias}-${index}` }>{alias}</li>
              ))}
            </ol>
          </li>
        </ul>
      );
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <h3>Loading...</h3>; }
    return <div>Type a character name and click to search!</div>;
  }
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    born: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    aliases: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

CharacterCard.defaultProps = {
  character: null,
  error: null,
};

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    character: state.requestCharacter.character,
    loading: state.requestCharacter.isLoading,
    error: state.requestCharacter.error,
  });
};

export default connect(mapStateToProps)(CharacterCard);
