import {Box, ChakraProvider, Container, extendTheme} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import Content from '../components/layout/Content';
import NavBar from '../components/layout/NavBar';
import {ChakraTheme} from '../styles/theme';

const App = (props: AppProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const {Component, pageProps} = props;

	const theme = extendTheme(ChakraTheme);
	return (
		<ChakraProvider  theme={theme}>
			<Box h="100vh" w="100%"  backgroundColor="secondary.contrastText" id="App Wrapper">
				<NavBar>
					<Content>
						<Component {...pageProps} />
					</Content>
				</NavBar>
			</Box>
		</ChakraProvider>
	);
};

export default App;
