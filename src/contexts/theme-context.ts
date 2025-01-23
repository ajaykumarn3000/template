import { createContext } from 'react';

const initialState: ThemeProviderState = {
	theme: 'system',
	setTheme: () => null,
};

export default createContext<ThemeProviderState>(initialState);
