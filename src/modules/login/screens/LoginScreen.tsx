import { useState } from "react"
import Button from "../../../shared/inputs/input/Button/Button/Button"
import Input from "../../../shared/inputs/input/Input"
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginSceen.styles"

const LoginScreen = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassWord] = useState("")
  
  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handlePassWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(event.target.value)
  }
const handleLogin =()=>{
alert({
  userName, password
})
}

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./background.png" />
          <TitleLogin level={2} type="secondary">LOOGIN</TitleLogin>
          <Input title="Usuário" margin="32px 0px 0px" onChange={handleUserName} value={userName} />
          <Input type="password" title="Senha" onChange={handlePassWord} value={password}/>
          <Button type="primary" margin="24px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  )
}

export default LoginScreen