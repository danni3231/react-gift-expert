import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components";

describe("Pruebad de <AddCategory/>", () => {
	test("Debe de cambiar el valor de la caja de texto", () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: "Hola Mundo" } });
		expect(input.value).toBe("Hola Mundo");
	});

	test("Debe de llamar onNewCategory si el un input tiene un valor", () => {
		const inputValue = "Hola Mundo";
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe("");

		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test("no debe llamar onNewCaregory si el input esta vacio", () => {
        const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole("form");

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled(0);
    });
});
