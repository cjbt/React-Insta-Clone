import React from 'react';
import styled from 'styled-components';

const StoriesContainer = styled.div`
  width: 292px;
  background: white;
  border: 1px solid #e6e6e6;
  height: 222px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
  overflow: hidden;
`;

const BoxLeft = styled.div`
  color: #999999;
  font-size: 1.5rem;
`;
const BoxRight = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Stories = () => {
  return (
    <React.Fragment>
      <StoriesContainer>
        <BoxLeft>Stories</BoxLeft>
        <BoxRight>Watch All</BoxRight>
      </StoriesContainer>
    </React.Fragment>
  );
};

export default Stories;
