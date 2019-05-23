import React, { createContext, SetStateAction, Dispatch } from 'react';

// export const ThemeContext: React.Context<(string | (() => string))[]> = createContext(['green', () => ''])
export const ThemeContext: React.Context<(string | (Dispatch<SetStateAction<string>>))[]> = createContext([
  'green',
  (_: SetStateAction<string>) => {},
]);
