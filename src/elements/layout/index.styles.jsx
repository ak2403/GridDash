import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: ${(props) => props.height || '100%'};
`;
