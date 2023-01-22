import {Heading, Text, Wrap, WrapItem} from '@chakra-ui/react';
import StyledCard, {type StyledCardProps} from '../components/atoms/StyledCard';
import Wedding1 from '../images/VoortingWedding1.jpeg';
import AlainaWedding1 from '../images/VoortingWedding-Alaina.jpeg';


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
];

const Gallery = () => (
	<>
		<div>Gallery</div>
		<Heading>The Journey</Heading>
		<Text>There have been many memories that have lead them to this next chapter.</Text>
		< >
			{AllCardsSections.map((section, index) => {
				const {header, cards} = section;
				return (
					<Wrap key={`${header}-${index}`}>
						<Heading>{header}</Heading>
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
				);
			})}
		</>
	</>
);
  
export default Gallery;