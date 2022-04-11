import styled from "styled-components";
import { recipeDarkGrey, recipeLightGrey } from "../../styles/colors";

export const DetailContainer = styled.section`
  background-color: #fafafa;
  padding-top: 50px;
`;

export const TopInfoContainer = styled.div`
  display: flex;
  padding: 20px 100px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }

  img {
    height: 400px;
    border-radius: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
      border-radius: 0px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const BottomContainer = styled.div`
  padding: 20px 100px;

  @media (max-width: 600px) {
    padding: 20px 20px;
  }

  h4 {
    font-size: 30px;
    font-weight: bold;
    color: ${recipeDarkGrey};
    margin-bottom: 20px;

    @media (max-width: 600px) {
      display: flex;
      font-size: 14px;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    color: ${recipeLightGrey};
    line-height: 1.5;
    letter-spacing: 0.2px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

export const RecipeCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${recipeLightGrey};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const RecipeName = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: ${recipeDarkGrey};
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const RecipeIngredients = styled.div`
  margin-top: 40px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
    margin-top: 15px;
  }

  h4 {
    font-size: 20px;
    color: ${recipeDarkGrey};
    font-weight: bold;

    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      font-size: 14px;
    }
  }

  div {
    p {
      margin-top: 10px;
      text-align: center;

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      font-weight: bold;
      color: ${recipeLightGrey};
    }
  }
`;

export const RecipeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  div:nth-child(3) {
    display: flex;
    margin-top: 10px;
    gap: 30px;

    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-around;
      margin-top: 5px;
    }

    p {
      font-size: 18px;
      color: ${recipeLightGrey};

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
`;
