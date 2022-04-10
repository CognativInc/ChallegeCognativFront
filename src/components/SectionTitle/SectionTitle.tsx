import styled from "styled-components";
import { recipeDarkGrey } from "../../styles/colors";

interface TitleProps {
  text: string;
}

const Title = styled.h2`
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

const SectionTitle = ({ text }: TitleProps): JSX.Element => {
  return <Title>{text}</Title>;
};

export default SectionTitle;
