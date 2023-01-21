import {Box, Stack} from '@chakra-ui/react';
import StyledCard, {type StyledCardProps} from '../components/atoms/StyledCard';
import Wedding1 from '../images/VoortingWedding1.jpeg';
import AlainaWedding1 from '../images/VoortingWedding-Alaina.jpeg';

const AllCards: StyledCardProps[] = [
	{
		title: 'Voorting Union',
		text: 'Alaina and Matthew saying their vows on their Wedding day!',
		image: Wedding1,
	},
	{
		title: 'Alainas Wedding Dress',
		text: 'Alaina on her wedding day in Seattle looking like Queen of the castle!',
		image: AlainaWedding1,
	},
];

const Gallery = () => (
	<>
		<div>Gallery</div>
		<Stack direction="row" spacing="25px">
			{AllCards.map((card, index) => {
				const {title, text, image} = card;
				return (
					<StyledCard key={index} text={text} title={title} image={image} />
				);
			})}
		</Stack>
	</>
);
  
export default Gallery;