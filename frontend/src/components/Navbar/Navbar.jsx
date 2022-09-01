import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "features/slices/userSlice/userSlice";
import {
  NavContainer,
  NavTitle,
  NavButtonWrapper,
  NavButton,
  KebabIcon,
  PlusIcon,
  TaskSpan,
  LogoIcon,
  TitleContainer,
  IconChevronUp,
  IconChevronDown,
  Chevron,
} from "./Navbar.Styled";

const Navbar = ({
  setShowAddTaskModal,
  handleMobileModalToggle,
  MobileModalToggle,
}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <NavContainer>
        <TitleContainer>
          <LogoIcon />
          <NavTitle>Platform Launch</NavTitle>
          <span>
            Hello name - <span onClick={handleLogout}>Logout</span>
          </span>
          <Chevron
            onClick={() => handleMobileModalToggle((previous) => !previous)}
          >
            {MobileModalToggle ? <IconChevronUp /> : <IconChevronDown />}
          </Chevron>
        </TitleContainer>
        <NavButtonWrapper>
          <NavButton
            onClick={() => setShowAddTaskModal((previous) => !previous)}
          >
            <PlusIcon />
            <TaskSpan>+ Add New Task</TaskSpan>
          </NavButton>
          <KebabIcon />
        </NavButtonWrapper>
      </NavContainer>
    </>
  );
};

export default Navbar;
