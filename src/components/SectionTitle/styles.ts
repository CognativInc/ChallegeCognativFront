import styled from "styled-components";
import { recipeDarkGrey } from "../../styles/colors";

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: ${recipeDarkGrey};
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-left: 15px;
    margin-bottom: 10px;
    font-size: 18px;
  }
`;
