import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #191921;
  display: flex;
  flex-direction: column;
`;

export const ContainerContent = styled.div`
  display: flex;
  padding: 20px 150px;
  gap: 100px;
  .img {
    img {
      width: 550px;
      height: 400px;
      border-radius: 10px;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 20px;
  .infomusic {
    color: #e2e8f0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h2 {
      font-size: 35px;
      letter-spacing: 1px;
      font-weight: normal;
    }
    p {
      font-size: 20px;
    }
  }
  .imgauthor {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px;
    background-color: #23232d;
    border-radius: 10px;
    width: 200px;
    img {
      width: 80px;
      height: 50px;
    }
    p {
      font-weight: bold;
      color: #e2e8f0;
    }
  }
  .containerSvg {
    display: flex;
    gap: 30px;
    div {
      padding: 30px;
      background-color: #23232d;
      border-radius: 10px;
      svg {
        color: #e2e8f0;
        width: 30px;
        height: 30px;
      }
    }
  }
`;
export const ContainerProgressiveBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;

  .time {
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
  }
  .progessBar {
  }
`;

export const ComandsMusics = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  gap: 50px;
  svg {
    color: #e2e8f0;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: filter 0.4s;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;
