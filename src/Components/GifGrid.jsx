import { GiftItem } from "./GiftItem";
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

	const {images, isLoading} = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Loading...</h2>}

			<section className="card-grid">
				{images.map((img) => (
					<GiftItem key={img.id} {...img} />
				))}
			</section>
		</>
	);
};
