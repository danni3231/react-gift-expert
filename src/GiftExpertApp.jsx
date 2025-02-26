import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	const addCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	console.log(categories);

	return (
		<>
			<h1>GiftExpertApp</h1>

			<AddCategory onNewCategory={addCategory} />

			{categories.map((category) => {
				return <GifGrid key={category} category={category} />;
			})}
		</>
	);
};
