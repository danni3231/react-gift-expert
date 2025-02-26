import { useState } from "react";
import { Input } from "../Styles/Index";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const newInputValue = inputValue.trim();
		if (newInputValue.length <= 1) return;

		onNewCategory(newInputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={onSubmit}>
			<Input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
