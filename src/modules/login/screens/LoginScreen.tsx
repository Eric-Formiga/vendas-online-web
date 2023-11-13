import Button from "../../../shared/inputs/input/Button/Button/Button"
import Input from "../../../shared/inputs/input/Input"
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginSceen.styles"

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./background.png" />
          <TitleLogin level={2} type="secondary">LOOGIN</TitleLogin>
          <Input title="Usuário"/>
          <Input title="Senha"/>
          <Button type="primary" margin="24px 0px 16px 0px">Entrar</Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  )
}

export default LoginScreen