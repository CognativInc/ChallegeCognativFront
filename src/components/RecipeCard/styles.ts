import styled from "styled-components";
import { recipeDarkGrey, recipeLightGrey } from "../../styles/colors";

export const RecipeContainer = styled.li`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    border-radius: 10px;
    height: 200px;
  }

  img {
    height: 100%;

    @media (max-width: 600px) {
      height: 60%;
      object-fit: cover;
    }
  }
`;

export const RecipeInfoContainer = styled.div`
  flex: 1 1;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 10px 15px;
  }
`;

export const RecipeBasicInfo = styled.div`
  padding: 0;

  p {
    font-size: 20px;
    font-weight: bold;
    color: ${recipeLightGrey};

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  div {
    padding: 0;
    display: flex;
    gap: 20px;
    margin-top: 10px;

    @media (max-width: 600px) {
      margin-top: 5px;
    }

    p {
      font-size: 18px;
      color: ${recipeLightGrey};
      font-weight: normal;

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
`;

export const RecipeName = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: ${recipeDarkGrey};
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-top: 5px;
  }
`;
