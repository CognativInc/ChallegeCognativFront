import { Title } from "./styles";

interface TitleProps {
  text: string;
}

const SectionTitle = ({ text }: TitleProps): JSX.Element => {
  return <Title>{text}</Title>;
};

export default SectionTitle;
