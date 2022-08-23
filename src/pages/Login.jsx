import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e9ebee;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border: 0.5px solid lightgray;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #21325E;
    color: #F0F0F0;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Button>Create</Button>
                <Link>Don't Remember The Password?</Link>
                <Link>Create A New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login