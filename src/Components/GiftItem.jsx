import PropTypes from 'prop-types'
import { Card } from "../Styles/Index";

export const GiftItem = ({ url, title }) => {
	return (
		<Card>
			<img src={url} alt={title} />
			<p>{title}</p>
		</Card>
	);
};

GiftItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};