import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/Components';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';

jest.mock('../../src/Hooks/useFetchGifs');

describe('Pruebas <GiftGrid/>', () => {
	const category = 'one punch';

	test('Debe mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

		render(<GifGrid category={category} />);
		expect(screen.getByText('Loading...'));
		expect(screen.getAllByText(category));
	});

	test('debe mostrar items cuando se cargan las imagenes mediantes useFetchGifs', () => {
        
        const gifts = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://...',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://...',
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifts,
            isLoading: false,
        })

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
		
	});
});
