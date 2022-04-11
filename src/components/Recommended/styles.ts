import styled from "styled-components";

export const ContainerTop = styled.div`
  padding: 20px 100px;

  @media (max-width: 600px) {
    padding: 20px 0 0 0;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 200px;
  align-items: stretch;

  @media (max-width: 600px) {
    overflow-x: scroll;
    justify-content: flex-start;
    height: 100%;
  }
`;

export const ListItem = styled.li`
  list-style: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;

    @media (max-width: 600px) {
      width: 200px;
      height: 150px;
      object-fit: cover;
    }
  }
`;
