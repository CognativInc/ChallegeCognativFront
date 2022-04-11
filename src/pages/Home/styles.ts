import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #fafafa;
  padding-top: 50px;

  & > div:nth-child(2n) {
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px 100px;

    @media (max-width: 600px) {
      padding: 10px 15px;
    }
  }
`;
