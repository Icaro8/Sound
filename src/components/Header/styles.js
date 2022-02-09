import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000000;
  a {
    color: #e2e8f0;
    text-decoration: none;
    transition: filter 0.4s;
    font-weight: bold;
    letter-spacing: 1px;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const ContainerLogo = styled.div``;

export const ContainerProfile = styled.div``;
