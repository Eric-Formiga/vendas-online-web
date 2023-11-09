import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginSceen.styles"

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./background.png" />
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  )
}

export default LoginScreen