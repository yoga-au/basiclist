import styled from "styled-components";

export const TextLink = styled.a`
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

export const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const NavWrapper = styled.nav`
  margin: 10px auto 80px;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid #ddd;
`;

export const NavLink = styled(TextLink)`
  margin-left: 12px;
`;

export const NavLogo = styled.div`
  margin-right: auto;
`;

export const Footer = styled.footer`
  display: block;
  text-align: center;
  padding: 30px 0;
  margin-top: 60px;
  color: #777;
  border-top: 1px solid #eaeaea;
`;

export const Homepage = {
  title: styled.h1`
    color: #333;
    padding-bottom: 20px;
    text-align: center;
  `,
  text: styled.p`
    color: #777;
  `,
  button: styled(TextLink)`
    display: block;
    width: 150px;
    padding: 8px 0;
    margin: 20px auto;
    background: #4979ff;
    border-radius: 4px;
    color: white;
    text-align: center;
  `,
};

export const BackLink404 = styled(TextLink)`
  color: #4979ff;
  text-decoration: underline;
`;
