import { GiftItem } from "./GiftItem";
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { CardGrid } from "../Styles/Index";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {

	const {images, isLoading} = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Loading...</h2>}

			<CardGrid className="card-grid">
				{images.map((img) => (
					<GiftItem key={img.id} {...img} />
				))}
			</CardGrid>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}


