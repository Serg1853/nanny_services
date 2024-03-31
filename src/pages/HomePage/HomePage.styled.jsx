import styled from '@emotion/styled';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 500px;
// `;

// export const Title = styled.h1`
//   margin: 0;
//   margin-right: 10px;
//   color: #ffffff;
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
// export const StyledImage = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: cover;
// `;


export const HeroContainer = styled.div`
  display: flex;
  position: relative;
  padding-left: 96px;
  align-items: center;
  max-width: 1376px;
  height: 736px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #0957c3;
  margin: auto;
`;
export const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const HeroTitle = styled.h1`
  width: 517px;
  color: #fbfbfb;

  font-family: 'Helvetica Neue';
  font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: 70px; /* 100% */
  letter-spacing: -2.1px;
`;
export const Text = styled.p`
  width: 517px;
  color: #fbfbfb;

  font-family: 'Helvetica Neue';
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 107.143% */
  letter-spacing: -0.56px;
`;
export const Button = styled.button`
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 30px;
  background-color: #0957c3;
  border: 1px solid rgba(251, 251, 251, 0.4);
  color: #fbfbfb;
  cursor: pointer;
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
`;
export const ImageContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(/Rectangle.png);
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100% 100%;
`;