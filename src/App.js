import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme'

import Layout from './components/Layout'
import Grids from './components/Grids'
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Grids />
			</Layout>
		</ThemeProvider>
	);
}

export default App
