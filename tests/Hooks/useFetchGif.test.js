import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';

describe('Pruebas del hook useFetchGif.js', () => {
	test('Debe regrear el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('yolo'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('Debe de retornar un arreglo de imagenes y isLoading false', async () => {
		const { result } = renderHook(() => useFetchGifs('yolo'));

		await waitFor(() =>
			expect(result.current.images.length).toBeGreaterThan(0)
		);

        const { images, isLoading } = result.current;
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
