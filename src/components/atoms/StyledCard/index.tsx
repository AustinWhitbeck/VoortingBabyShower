import {Card, CardBody,  Heading,  Stack, Text} from '@chakra-ui/react';
import Image, {type StaticImageData} from 'next/image';
import React from 'react';

export type StyledCardProps = {
	title: string;
	text: string;
	image: StaticImageData;
};

const StyledCard = (props: StyledCardProps) => {
	const {title, text, image} = props;
	return (
		<Card w="400px"  bgGradient='linear(to-t, primary.light, secondary.light)'>
			<CardBody>
				<Image src={image} alt={`image of ${title}`} height={100} width={300}/>
				<Stack mt='6' spacing='3'>
					<Heading size='md' color="secondary.contrastText">{title}</Heading>
					<Text>
						{text}
					</Text>

				</Stack>
			</CardBody>
		

			{/* <Divider /> */}
			{/* <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter> */}
		</Card>
	);
};

export default StyledCard;