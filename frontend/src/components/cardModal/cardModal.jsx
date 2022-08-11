import React from "react";
import { ModalWrapper, ModalContainer, CardTitle, CardDescription } from "./CardModal.styled.js";

const CardModal = () => {

    return (
        <>
            <ModalWrapper>
                <ModalContainer>
                    <CardTitle>Research pricing points of various competitors and trial different business models</CardTitle>
                    <CardDescription>We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</CardDescription>
                </ModalContainer>
            </ModalWrapper>
        </>
    )
};

export default CardModal;