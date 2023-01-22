import {AspectRatio, Box, Center, Container, Text} from '@chakra-ui/react';

const Location = () => (
	<>
		<Container>
			<Text fontSize="25px" color="secondary.main">
				Saturday April 1st 2023 <br/>
				AT 2 O CLOCK IN THE AFTERNOON <br/>
				THE CHERIE INN <br/>
				969 Cherry St. SE, Grand Rapids, MI 495096
			</Text>
			<Text></Text>
		</Container>
		<Center>
			<Box w="90%" border="4px solid" borderColor="primary.light" borderRadius="2px">
				<AspectRatio ratio={16 / 9} >
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.882907008538!2d-85.64721068429338!3d42.95967190501555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819ada0ec13576b%3A0x84eaf5e30c32b56e!2sCherie%20Inn!5e0!3m2!1sen!2sus!4v1674334591092!5m2!1sen!2sus" />
				</AspectRatio>
			</Box>
		</Center>
	</>
);

export default Location;