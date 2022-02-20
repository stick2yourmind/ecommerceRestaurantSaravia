import styled from '@emotion/styled'

const Nav = styled.nav`
  box-shadow:
  0px 1.2px 2.2px rgba(0, 0, 0, 0.02),
  0px 3px 5.3px rgba(0, 0, 0, 0.028),
  0px 5.6px 10px rgba(0, 0, 0, 0.035),
  0px 10.1px 17.9px rgba(0, 0, 0, 0.042),
  0px 18.8px 33.4px rgba(0, 0, 0, 0.05),
  0px 45px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  height: 3rem;
  justify-content:space-around;
  align-items: center;
  padding: 0.5rem 0;
  
  &.navbar-brand{
    color: #CF0A2C;
  }
  .navbar-nav{
    display: flex;
    flex-grow: 0.3;
    justify-content: space-between;
    list-style: none;
  }
  .navbar-link{
    padding: 0.5rem 0;
    text-decoration: none;
    color: #CF0A2C;

  }
  li .navbar-link{
    color: black;
    position:relative;
    padding: 0.5rem 0;
    text-decoration: none;
    font-weight: 400;
    transition: font-weight 0.3s ease,
                box-shadow 0.4s ease,
                color 0.1s ease;  
    border-radius: 8%;
    padding: 0.5rem;
    font-family: "Exo 2", sans-serif;

    &:hover{
        font-weight: 800;
        box-shadow: 0px 5.2px 3.6px rgba(0, 0, 0, 0.211),
                    0px 8.9px 8.1px rgba(0, 0, 0, 0.28),
                    0px 19px 76px rgba(0, 0, 0, 0.34);
        color: #CF0A2C;

    }
  }
  .cartContainer{
    height: 100%;
    position: relative;
  }

  .cartImg{
    height: 100%;
  }
  .cartQuantity{
    position: absolute;
    font-size: 0.7rem;
    top: 0.3rem;
    left: 0.8rem;
  }
  
`

export default Nav