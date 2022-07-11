import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Order Now Over 50$ and get shipping all over United States for free!</Container>;
};

export default Announcement;
