import './App.scss' ;
import { Container } from './components/container/container';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

const App = () => {
  return (
    <>
    <Header/>
    <Main>
      <Container color='#2BBBde' height='30px'>hello</Container>
      <Container className='center greybar'>hello</Container>
    </Main>
    <Footer></Footer>
   </>
  )
}
export default App ;