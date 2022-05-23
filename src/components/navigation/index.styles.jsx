import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  padding: 30px 10px;
  border-radius: 25px;
  width: 120px;
  background-color: #4163cf;
  margin: 15px;
`;

export const Nav = styled.div`
  font-size: 24px;
  height: 40px;
  color: #fff;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
