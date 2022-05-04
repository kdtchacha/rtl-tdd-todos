import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile/>", () => {
    it('shows the props correctly', () => {
        const utils = render(<Profile username="chacha" 
        name='이가희' />);
        utils.getByText('chacha');
    })
    it('matches snapshot', () => {
        const utils = render(<Profile username="chacha" name="이가희" />);
        expect(utils.container).toMatchSnapshot();
    })
})
