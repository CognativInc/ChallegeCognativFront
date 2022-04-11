import styled from "styled-components";

export const RecipesContainer = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;
