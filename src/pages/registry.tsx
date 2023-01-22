import {Box, Center, Heading, Link, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import BabyListIcon from '../images/BabyListIcon.png';

const Registry = () => (
	<>
		<div>registry</div>
		<Heading as="h2">Being parents is an amazing opportunity but it can also be expensive!</Heading>
		<Text>Click the link to check out the registry to give pick out a gift and make it a little easier on them. :)</Text>
		<Stack flexDirection="row">
			<Center>
				<Image src={BabyListIcon} width={25} alt="Babylist Icon"/>

				<Link href="https://www.babylist.com/baby-alaina-voorting" isExternal >Babylist Registry</Link>
			</Center>
		</Stack>
	</>
);

export default Registry;