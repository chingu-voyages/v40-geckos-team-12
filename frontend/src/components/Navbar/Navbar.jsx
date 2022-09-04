import React, { useState } from "react";
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
  NameSpan,
  LogoutWrapper,
  LogoutButton
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

  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  return (
    <>
      <NavContainer>
        <TitleContainer>
          <LogoIcon />
          <NavTitle>Platform Launch</NavTitle>
          <Chevron
            onClick={() => handleMobileModalToggle((previous) => !previous)}
          >
            {MobileModalToggle ? <IconChevronUp /> : <IconChevronDown />}
          </Chevron>
          <NameSpan>
            Hello, name!
          </NameSpan>
        </TitleContainer>
        <NavButtonWrapper>
          <NavButton
            onClick={() => setShowAddTaskModal((previous) => !previous)}
          >
            <PlusIcon />
            <TaskSpan>+ Add New Task</TaskSpan>
          </NavButton>
          <KebabIcon onClick={() => setOpenLogoutModal((previous) => !previous)}/>
          {openLogoutModal && (
            <LogoutWrapper>
              <LogoutButton onClick={handleLogout} >
                Logout 
              </LogoutButton>
            </LogoutWrapper>
          )}
        </NavButtonWrapper>
      </NavContainer>
    </>
  );
};

export default Navbar;
