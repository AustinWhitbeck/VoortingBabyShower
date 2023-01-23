import {Box, Heading, Text, Wrap, WrapItem} from '@chakra-ui/react';
import StyledCard, {type StyledCardProps} from '../components/atoms/StyledCard';
import Wedding1 from '../images/VoortingWedding2.jpeg';
import AlainaWedding1 from '../images/VoortingWedding-Alaina.jpeg';
import ForFunImage1 from '../images/ForFunImage1.jpeg';
import ForFunImage2 from '../images/ForFunImage3.jpeg';
import Theoden1 from '../images/ForFunImage2.jpeg';
import Theoden2 from '../images/Theoden1.jpeg';
import Theoden3 from '../images/Theoden2.jpeg';


type ImageSectionProps = {
	header: string;
	cards: StyledCardProps[];
};

const AllCardsSections: ImageSectionProps[] = [
	{
		header: 'Wedding',
		cards: [
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
		],
	},
	{
		header: 'Fun Moments',
		cards: [
			{
				title: 'Alainas Wedding Dress',
				text: 'Alaina on her wedding day in Seattle looking like Queen of the castle!',
				image: ForFunImage1,
			},
			{
				title: 'Alainas Wedding Dress',
				text: 'Alaina on her wedding day in Seattle looking like Queen of the castle!',
				image: ForFunImage2,
			},
		],
	},
	{
		header: 'The First Son',
		cards: [
			{
				title: 'Balloning!',
				text: 'Happy Dog is outside, Happy dog appreciates good trips.',
				image: Theoden2,
			},
			{
				title: 'Family Cuddles!',
				text: 'Alaina on her wedding day in Seattle looking like Queen of the castle!',
				image: Theoden3,
			},
		],
	},
];

const Gallery = () => (
	<Box id="gallery wrapper">
		<div>Gallery</div>
		<Heading>The Journey</Heading>
		<Text>There have been many memories that have lead them to this next chapter.</Text>
		<Box id="Gallery Box" height="100%">
			{AllCardsSections.map((section, index) => {
				const {header, cards} = section;
				return (
					<>
						<Heading>{header}</Heading>
						<Wrap key={`${header}-${index}`}>
							<Wrap direction="row" spacing="25px"></Wrap>
							{cards.map((card) => {
								const {title, text, image} = card;

								return (

									<WrapItem key={index}>
										<StyledCard  text={text} title={title} image={image} />
									</WrapItem>
								);
							})};
						</Wrap>
					</>
				);
			})}
		</Box>
	</Box>
);
  
export default Gallery;