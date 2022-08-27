import React, { useState } from "react";
import { ListItem, ToggleSwitch } from "../../components";
import { useDispatch } from "react-redux";

import { toggleTheme } from "../../features/slices/themeSlice/themeSlice";

import iconBoard from "../../assets/icon-board.svg";

import { Container, SpanBoard, ListContainer, Wrapper } from "./MobileSidebar.styled"

const MobileSidebar = () => {

    const dispatch = useDispatch();
    const [position, setPosition] = useState(-1);
    const texts = ['Platform launch', 'Marketing plan', 'Roadmap'];


    const handleClick = (index) => {
        setPosition(index);
        console.log('clicked');
    }

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <Wrapper>
        <Container>
            <SpanBoard style={{color: '#828FA3'}}>All boards</SpanBoard>
            <ListContainer>
            {texts.map((item, index) => <div key={index} onClick={() => handleClick(index)} className={index === position ? 'active' : null}><ListItem text={item} svg={iconBoard} /></div>)}
            </ListContainer>
            
            <ToggleSwitch handleToggle={handleToggle} />
        </Container>
      </Wrapper>
    )
};

export default MobileSidebar;