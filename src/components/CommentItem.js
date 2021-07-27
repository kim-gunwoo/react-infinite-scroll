import styled from "styled-components";

export default function CommentItem({ item: { id, email, body } }) {
  return (
    <Container>
      <Wrapper>
        <Strong>Comment ld</Strong>
        <ColName>{id}</ColName>
      </Wrapper>
      <Wrapper>
        <Strong>Email</Strong>
        <ColName>{email}</ColName>
      </Wrapper>
      <Wrapper>
        <StyledStrong>Comment</StyledStrong>
        <Content>{body}</Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 14px 0;
  padding: 20px;
  width: 500px;

  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 18px;
  color: #212529;
  line-height: 21px;
`;

const Strong = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 12px;
  font-weight: bold;
`;

const ColName = styled.span``;

const StyledStrong = styled(Strong)`
  margin-bottom: 0;
`;

const Content = styled.div``;
