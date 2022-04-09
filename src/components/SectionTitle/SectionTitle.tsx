import styled from "styled-components";

interface TitleProps {
  text: string;
}

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-left: 30px;
    font-size: 25px;
  }
`;

const SectionTitle = ({ text }: TitleProps): JSX.Element => {
  return <Title>{text}</Title>;
};

export default SectionTitle;
