import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Modal } from "../../components/Modal";

describe("Test en <Modal />", () => {

    test("Modal muestra a los childs y el botón de cierre", () => {
        const showModal = jest.fn();
        const { getByText } = render(
        <Modal onOpen={showModal}>
            <div>test</div>
        </Modal>
    );
    expect(getByText("test")).toBeTruthy();
    fireEvent.click(getByText("test"));
    expect(showModal).toHaveBeenCalledTimes(1);
});
});