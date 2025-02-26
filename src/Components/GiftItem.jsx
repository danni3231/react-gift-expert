import React from "react";
import { Card } from "../Styles/Index";

export const GiftItem = ({url, title}) => {
	return (
		<Card className='card'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</Card>
	);
};
