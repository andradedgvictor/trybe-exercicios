import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRedux from '../helpers/renderWithRedux';

import App from '../App';

describe('Testando o componente App.', () => {
  const textButtonAdd1 = 'Incrementa 1';

  it('Verifica se o clique dos botões incrementa corretamente o valor do estado global.', () => {
    renderWithRedux(<App />);

    const count = screen.getByRole('heading', { level: 2 });
    expect(count).toBeInTheDocument();
    expect(count.innerHTML).toBe('0');

    const buttonAdd1 = screen.getByRole('button', { name: textButtonAdd1 });
    const buttonAdd5 = screen.getByRole('button', { name: 'Incrementa 5' });

    act(() => userEvent.click(buttonAdd1));
    expect(screen.getByText('1')).toBeInTheDocument();

    act(() => userEvent.click(buttonAdd5));
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  it('Verifica se ao alterar o valor inicial do estado global count para 5 e teste se os botões incrementam corretamente o valor do estado global.', () => {
    const initialState = {
      counterReducer: {
        count: 5,
      },
    };
    renderWithRedux(<App />, { initialState });

    const count = screen.getByRole('heading', { level: 2 });
    expect(count).toBeInTheDocument();
    expect(count.innerHTML).toBe('5');

    const buttonAdd1 = screen.getByRole('button', { name: textButtonAdd1 });
    const buttonAdd5 = screen.getByRole('button', { name: 'Incrementa 5' });

    act(() => userEvent.click(buttonAdd1));
    expect(screen.getByText('6')).toBeInTheDocument();

    act(() => userEvent.click(buttonAdd5));
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('Verifica se incrementa o valor da store ao clicar no botão', () => {
    const { store } = renderWithRedux(<App />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(0);

    const buttonAdd1 = screen.getByRole('button', { name: textButtonAdd1 });
    act(() => userEvent.click(buttonAdd1));

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(1);
  });
});
