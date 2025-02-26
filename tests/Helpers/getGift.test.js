import { getGift } from "../../src/Helpers/getGift";

describe("Pruebas en getGift()", () => {
	test("debe retornar un areglo de gifs", async () => {
		const gifs = await getGift("One Punch");
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
