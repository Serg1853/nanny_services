import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  background: inherit;
  max-width: 1184px;
  height: 48px;
  padding: 20px 96px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledLinkLogo = styled(Link)`
  color: #fbfbfb;

  font-family: 'Helvetica Neue';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.48px;
  color: #fbfbfb;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  margin-left: auto;
  margin-right: 92px;
`;

export const StyledLink = styled(Link)`
  color: #fbfbfb;

  font-family: 'Helvetica Neue';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  padding: 14px 39px;
  background-color: inherit;
  cursor: pointer;
  color: #fbfbfb;
  font-family: 'Helvetica Neue';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
`;
export const ButtonRegistration = styled.button`
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  padding: 14px 39px;
  cursor: pointer;
  color: #fbfbfb;
  font-family: 'Helvetica Neue';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
  background-color: #0957c3;
`;

