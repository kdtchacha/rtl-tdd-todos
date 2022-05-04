import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe('<Counter />', () => {
    it('has a number and buttons', () =>{
        const utils = render(<Counter />);
        utils.getByText(0);
        utils.getByText(+1);
        utils.getByText(-1);
    })
    it('increases', () => {
        const utils = render(<Counter />);
        const number = utils.getByText('0');
        const plusButton = utils.getByText('+1');
        //클릭이벤트 처리
        fireEvent.click(plusButton);
        fireEvent.click(plusButton);
        expect(number).toHaveTextContent('2');
        expect(number.textContent).toBe('2');

    })
    it('decreases', () => {
        const utils = render(<Counter />);
        const number = utils.getByText('0');
        const plusButton = utils.getByText('-1');
        //클릭이벤트 처리
        fireEvent.click(plusButton);
        fireEvent.dblClick()
        fireEvent.click(plusButton);
        expect(number).toHaveTextContent('-2');

    })
})