import React from "react";
import logo from "../../imgs/logo.png";
import styled from "styled-components";

const BannerDiv = styled.div`
background-color: ${props => props.theme.main};
`;

const Banner = () => {
  return (
    <BannerDiv>
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </BannerDiv>
  );
};

export default Banner;
