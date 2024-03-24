import { Banner } from "../components/styled/Banner";
import { CardInfo } from "../components/styled/CardInfo";
import { ContainerInfoCard } from "../components/styled/ContainerInfoCard";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IconContext } from "react-icons";
import { BiSolidComponent } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { Container } from "../components/styled/Container";
import { Card } from "../components/styled/Card";
import { ImageContainer } from "../components/styled/ContainerImage";
import { Contato } from "../components/styled/Contato";
import { Footer } from "../components/styled/Footer";

export function Home() {
  return (
    <>
      <Banner>
        <div>
          <h1>Minha primeira página com React.</h1>
        </div>
      </Banner>
      <ContainerInfoCard>
        <CardInfo>
          <IconContext.Provider value={{ size: "9em", color: " blue" }}>
            <HiOutlineDesktopComputer />
          </IconContext.Provider>
          ;<h1>Somente para Desktop</h1>
          <p>Vamos aprender, como utilizar um framework.</p>
        </CardInfo>
        <CardInfo>
          <IconContext.Provider value={{ size: "9em", color: " blue" }}>
            <BiSolidComponent />
          </IconContext.Provider>
          <h1>Criado com componentes</h1>
          <p>Utilizamos o Styled Components</p>
        </CardInfo>
        <CardInfo>
          <IconContext.Provider value={{ size: "9em", color: "blue" }}>
            <MdDone />
          </IconContext.Provider>
          <h1>Facíl aproveitamento</h1>
          <p>Estamos no caminho</p>
        </CardInfo>
      </ContainerInfoCard>
      <Container>
        <Card>
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa
            harum quidem? Beatae perferendis eos vitae doloremque praesentium
            laudantium rerum sequi, reiciendis dolore, voluptates eaque optio ab
            maiores dolorem corporis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias ipsa harum quidem? Beatae perferendis eos
            vitae doloremque praesentium laudantium rerum sequi, reiciendis
            dolore, voluptates eaque optio ab maiores dolorem corporis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa harum
            quidem? Beatae perferendis eos vitae doloremque praesentium
            laudantium rerum sequi, reiciendis dolore, voluptates eaque optio ab
            maiores dolorem corporis!
          </p>
        </Card>
        <Card>
          <ImageContainer imageUrl="https://images.unsplash.com/photo-1461696114087-397271a7aedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MTEyNDQyMDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"></ImageContainer>
        </Card>
        <Card>
          <ImageContainer imageUrl="https://images.unsplash.com/photo-1461696114087-397271a7aedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MTEyNDQyMDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"></ImageContainer>
        </Card>
        <Card>
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa
            harum quidem? Beatae perferendis eos vitae doloremque praesentium
            laudantium rerum sequi, reiciendis dolore, voluptates eaque optio ab
            maiores dolorem corporis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias ipsa harum quidem? Beatae perferendis eos
            vitae doloremque praesentium laudantium rerum sequi, reiciendis
            dolore, voluptates eaque optio ab maiores dolorem corporis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa harum
            quidem? Beatae perferendis eos vitae doloremque praesentium
            laudantium rerum sequi, reiciendis dolore, voluptates eaque optio ab
            maiores dolorem corporis!
          </p>
        </Card>
        <Card>
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa
            harum quidem? Beatae perferendis eos vitae doloremque praesentium
            laudantium rerum sequi, reiciendis dolore, voluptates eaque optio ab
            maiores dolorem corporis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias ipsa harum quidem? Beatae perferendis eos
            vitae doloremque praesentium laudantium rerum sequi, reiciendis
            dolore, voluptates eaque optio ab maiores dolorem corporis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa harum
            quidem? Beatae perferendis eos vitae doloremque praesentium
            laudantium rerum sequi, reiciendis dolore, voluptates eaque optio ab
            maiores dolorem corporis!
          </p>
        </Card>
        <Card>
          <ImageContainer imageUrl="https://images.unsplash.com/photo-1461696114087-397271a7aedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MTEyNDQyMDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"></ImageContainer>
        </Card>
      </Container>
      <Contato>
        <h1>Contato</h1>
      </Contato>
      <Footer>
        <h1>Teste</h1>
      </Footer>
    </>
  );
}
