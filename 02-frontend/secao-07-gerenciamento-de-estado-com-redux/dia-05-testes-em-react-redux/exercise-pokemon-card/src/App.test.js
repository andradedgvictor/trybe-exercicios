import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
import randomNumber from './utils/randomNumber';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

jest.mock('./utils/randomNumber');

describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);

    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const nextPokemonbtn = screen.getByRole('button');
    expect(nextPokemonbtn).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const firstPokemonId = 656;
    const firstEndpoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    randomNumber.mockReturnValue(firstPokemonId);

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const firstPokemonId = 656;
    const firstEndpoint = 'https://pokeapi.co/api/v2/pokemon/656/';
    const nextPokemonId = 96;
    const nextEndpoint = 'https://pokeapi.co/api/v2/pokemon/96/';

    randomNumber.mockReturnValue(nextPokemonId);

    randomNumber.mockReturnValueOnce(firstPokemonId);

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);

    const nextPokemonbtn = await screen.getByRole('button');
    expect(nextPokemonbtn).toBeInTheDocument();
    act(() => {
      userEvent.click(nextPokemonbtn);
    })

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(nextEndpoint);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    const firstPokemonId = 656;

    randomNumber.mockReturnValue(firstPokemonId);

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    const pokemonName = screen.queryByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
    const pokemonImg = screen.queryByAltText('pokemon');
    expect(pokemonImg).toBeInTheDocument();
  });
});
