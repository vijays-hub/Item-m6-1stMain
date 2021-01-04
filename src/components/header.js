import React from "react"
import styled from 'styled-components'

const StyledWrapper = styled.div`
  .menu-items{
    color:${props => props.theme["color"]};
    font-size:${props => props.theme["headerFontSize"]}; 
  }
  .header__logo{
    width:100%;
    height: 100%;
    object-fit:contain;
  }
`

const Header = () => (

  <StyledWrapper>
    <div className="container-fluid pt-2">
      <div className="row justify-content-evenly">
        <div className="col-1">
          <img className="header__logo" src="https://cdn.item-m6.com/static/version1608121341/frontend/Igniti/Item/en_US/images/logo.svg" alt="" />
        </div>
        <div className="col-8 menu-items d-flex flex-wrap justify-content-around align-items-center pl-5">
          <div className="item1">BODYWEAR</div>
          <div className="item2">LEGWEAR</div>
          <div className="item3">ABOUT ITEM M6 &nbsp; <i class="fas fa-chevron-down"></i></div>
          <div className="item4">RETURNS</div>
          <div className="item5">CONTACT US</div>
        </div>
        <div className="col-3">
          <div className="search d-flex justify-content-end">
            <input type="text" placeholder="Search" />
            <i class="fas fa-search icon"></i>
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>



)

export default Header
