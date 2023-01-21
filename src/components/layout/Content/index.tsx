import {Box, Container} from '@chakra-ui/react';

type Props = {
	children: JSX.Element;
};

const Content = (props: Props) => {
	const {children} = props;
	return (
		<Box   bgColor="secondary.contrastText" h="100%" p="50px 20px 0 20px">
			{children}
		</Box>
	);
};

export default Content;