import React from 'react';
import styled from 'styled-components';

const SuggestionsContainer = styled.div`
  width: 292px;
  background: white;
  border: 1px solid #e6e6e6;
  height: 203px;
  margin-top: 12px;
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

const Suggestions = () => {
  return (
    <SuggestionsContainer>
      <BoxLeft>Suggestions For You</BoxLeft>
      <BoxRight>See All</BoxRight>
    </SuggestionsContainer>
  );
};

export default Suggestions;
