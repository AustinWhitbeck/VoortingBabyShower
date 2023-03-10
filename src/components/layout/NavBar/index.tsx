import {TabList, Tabs, Tab, Box} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

type Props = {
	children: JSX.Element;
};

type TabInfo = {
	text: string;
	route: string;
};

const NavBar = (props: Props) => {
	const {children} = props;

	const router = useRouter();
	const [currentRoute, setCurrentRoute] = useState<number>(0);

	const NavTabs: TabInfo[] = [
		{ 
			text: 'Home',
			route: '/',
		},
		{ 
			text: 'Registry',
			route: '/registry',
		},
		{ 
			text: 'Location',
			route: '/location',
		},
		{ 
			text: 'Gallery',
			route: '/gallery',
		},
	];
    
	return (
		<>
			<Tabs background="primary.main" position="absolute" w="100%">
				<TabList>
					<>
						{NavTabs.map((tab, index) => {
							const {text, route} = tab;
							return (
								<Tab key={index} 
									color={index === currentRoute ? 'secondary.contrastText' : 'secondary.light'} 
									onClick={async () => {
										setCurrentRoute(index);
										await router.push(route);
									}
									}>
									{text}
								</Tab>
							);
						})}
					</>
				</TabList>
			</Tabs>
			<Box id="children wrapper">
				{children}
			</Box>
		</>

	);
};

export default NavBar;