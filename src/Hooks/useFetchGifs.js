import { useState, useEffect } from "react";
import { getGift } from "../Helpers/getFift";

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGift(category).then((newImgs) => {
			setImages(newImgs);
			setIsLoading(false);
		});
	}, []);

	return {
		images,
		isLoading,
	};
};
