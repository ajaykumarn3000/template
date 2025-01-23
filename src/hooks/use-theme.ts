import themeContext from '@/contexts/theme-context';
import { useContext } from 'react';

export const useTheme = () => {
	const context = useContext(themeContext);

	if (context === undefined)
		throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};
