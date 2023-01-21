import { Container } from "@chakra-ui/react";

interface Props {
    children: JSX.Element;
}

const Content = (props: Props) => {
    const { children } = props;
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Content