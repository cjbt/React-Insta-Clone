import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserProfileStyle = styled.div`
  height: 67px;
  display: flex;
  flex-direction: row;
  z-index: 999;
`;
const ProfilePic = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-left: 4px;
  border: 0.5px solid lightgray;
`;
const MainUser = styled.div`
  padding-left: 14px;
  padding-top: 9px;
`;
const MainAlias = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: black;
  }
`;
const MainFull = styled.div`
  color: #999999;
  padding-top: 5px;
  font-size: 1.3rem;
`;

const UserProfile = props => {
  return (
    <UserProfileStyle>
      <div>
        <a
          href={`http://instagram.com/${props.username}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <ProfilePic src={props.profile} alt='' />
        </a>
      </div>

      <MainUser>
        <MainAlias>
          <a
            href={`http://instagram.com/${props.username}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {props.username}
          </a>
        </MainAlias>
        <MainFull>{`${props.firstName}`}</MainFull>
      </MainUser>
    </UserProfileStyle>
  );
};

UserProfile.defaultProps = {
  username: 'cjbt',
  firstName: 'cj tantay',
  profile: 'https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512'
};

UserProfile.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string
};

export default UserProfile;

/* 
  displayClick = e => {
    this.setState(
      {
        displayImg: e.target.src
      },
      () => console.log(this.state.displayImg)
    );

    if (this.state.displayImg === e.target.src) {
      this.setState (prevState=> ({
        clicked: !prevState.clicked
      }))
  };

src='https://ca.slack-edge.com/T4JUEB3ME-U4KHSNE3D-fd940398bb80-512'
                      onClick={this.displayClick}
                      alt=''
                      clicked={this.state.clicked}
                    />
                  
             

 <BotImage />
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-U5SF97A1Z-a2ca5f5dbe53-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-U7LV36C66-84460946c45e-512'
                    onClick={this.displayClick}
                    alt=''
                  />
                  <Image
                    src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                </DisplayImages>
                <OrBottom>OR DEFAULT</OrBottom>
                <BottomRow>
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
*/
