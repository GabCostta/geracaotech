import Banner from "./components/Banners";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import {Component1, Component2 } from "./components/VariosComponents";

const Hello = () => {
  return (
    <h1>Hello DEV</h1>
  );
}

const User = () => {
  return (
    <h1>Gabriel Costa</h1>
  );
}

const App = () => {
  // parte logica do component
  return (
    //parte visivel para o usuario
    <>
      <Hello />
      <User />
      <Header/>
      <Banner/>
      <Component1/>
      <Component2/>
      <FormaDeBolo sabor="Laranja" cobertura="Cocolate"/>
      <FormaDeBolo sabor="Chocolate" cobertura="Chantily"/>
      <Card 
        titulo={"Noticia 01"} 
        imagem={"https://vidasaudavel.einstein.br/wp-content/uploads/2023/08/esportes-em-equipe.jpeg"}
        categoria={"Esportes"} 
        paragrafo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa maiores cumque nihil dignissimos facere illo minus corrupti totam sit, deserunt maxime repellendus minima labore accusamus sunt aliquid cupiditate hic."}
        tipo={"A"}
      />
      <Card 
        titulo={"Noticia 02"}
        imagem={"https://vidasaudavel.einstein.br/wp-content/uploads/2023/08/esportes-em-equipe.jpeg"}
        categoria={"Finanças"} 
        paragrafo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa maiores cumque nihil dignissimos facere illo minus corrupti totam sit, deserunt maxime repellendus minima labore accusamus sunt aliquid cupiditate hic."}
      />
      <Card 
        titulo={"Noticia 03"} 
        categoria={"Tecnologia"} 
        paragrafo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa maiores cumque nihil dignissimos facere illo minus corrupti totam sit, deserunt maxime repellendus minima labore accusamus sunt aliquid cupiditate hic."}
      />

      <CardDinamico>
        <h1>Noticia 04</h1>
        <img src="https://vidasaudavel.einstein.br/wp-content/uploads/2023/08/esportes-em-equipe.jpeg" alt="" />
      </CardDinamico>Im
      <CardDinamico>
        <img src="https://vidasaudavel.einstein.br/wp-content/uploads/2023/08/esportes-em-equipe.jpeg" alt="" />
        <h1>Noticia 04</h1>
      </CardDinamico>
    </>
  );
}

export default App;