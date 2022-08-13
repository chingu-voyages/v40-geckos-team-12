import React from "react";
import { ModalWrapper, ModalContainer, TitleKebabContainer, KebabIcon, CardTitle, CardDescription, SubTaskTitle, Input, LabelText, Label } from "./CardModal.styled.js";

const CardModal = () => {

    return (
        <>
            <ModalWrapper>
                <ModalContainer>
                    <TitleKebabContainer>
                    <CardTitle>Research pricing points of various competitors and trial different business models</CardTitle>
                    <KebabIcon/>
                    </TitleKebabContainer>
                    <CardDescription>We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</CardDescription>
                    <SubTaskTitle>Subtasks (2 of 3)</SubTaskTitle>
                    <Label>
                        <Input />
                        <LabelText>Research competitor pricing and business models</LabelText>
                    </Label>
                    <Label>
                        <Input />
                        <LabelText>Outline a business model that works for our solution</LabelText>
                    </Label>
                    <Label>
                        <Input />
                        <LabelText>Talk to potential customers about our proposed solution and ask for fair price expectancy</LabelText>
                    </Label>
                </ModalContainer>
            </ModalWrapper>
        </>
    )
};

export default CardModal;