import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/Components";

describe("Test in <Giftitem/>", () => {
	const { id, title, url } = {
		id: "ABC",
		title: "Un titulo",
		url: "https://localhost/cualquier/cosa.jpg",
	};

	test("debe hacer match con el snapshot", () => {
		const { container } = render(<GiftItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test("debe mostrar la imagen con el url y el alt indicado", () => {
		render(<GiftItem title={title} url={url} />);
		//screen.debug();
		const { src, alt } = screen.getByRole("img");
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test("debe mostrar el titulo del componente", () => {
        render(<GiftItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
