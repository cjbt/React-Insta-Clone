import React from 'react';
import styled from 'styled-components';

const BottomLinksContainer = styled.div`
  color: #c7c7c7;
  padding-top: 18px;
`;
const Links = styled.p`
  line-height: 1.3rem;
`;
const LinkAnchor = styled.span`
  cursor: pointer;
  font-size: 1.125rem;
`;
const CopyRight = styled.div`
  padding-top: 25px;
`;

const BottomLinks = () => {
  return (
    <BottomLinksContainer>
      <Links>
        <LinkAnchor>About Us</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Support</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Press</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>API</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Jobs</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Privacy</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
      </Links>
      <Links>
        <LinkAnchor>Terms</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Dictionary</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Profiles</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Hashtags</LinkAnchor>
        <LinkAnchor> · </LinkAnchor>
        <LinkAnchor>Language</LinkAnchor>
      </Links>
      <CopyRight>© 2018 CECIL JOHN TANTAY</CopyRight>
    </BottomLinksContainer>
  );
};

export default BottomLinks;
