import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderComponent = styled.header`
  background-color: #2c1e2e;
  color: #ffffff;
  padding: 2rem 0;
`;

export const StyledLink = styled.a`
  position: relative;

  &.active {
    color: #9c27b0;
    font-weight: 600;
  }
  &.active::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #9c27b0;
    bottom: -0.8rem;
    left: 0;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 3rem;
`;
export const ListItem = styled.li`
  list-style: none;
`;

export const TablesWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
`;
export const TableTitle = styled.h2`
  text-align: center;
  /* margin-top: 2rem; */
`;
export const UsersTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
`;
export const FormLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000a8;
  transform: translate(-50%, -50%);
`;
export const UsersLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
`;
export const FooterComponent = styled.footer`
  background-color: #2c1e2e;
  color: #ffffff;
  padding: 2rem 0;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;
