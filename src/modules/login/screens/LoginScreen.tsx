import Input from "../../../shared/inputs/input/Input"
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginSceen.styles"

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./background.png" />
          <Input title="Usuário"/>
          <Input title="Senha"/>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  )
}

export default LoginScreen