import { useEffect, useState } from "react";

const Animais = (props) => {
  //const {latin_name, image_link, geo_range, diet, habitat} = props.animais;
  const [animal, setAnimal] = useState("Show animal"); 

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setAnimal(data);
  };

  return (
    <div className="container">
        <header>
            <img src={animal.image_link} alt="{animal}" className="img-animal" width="350" />
        </header>
        <main>
            <h1 className="nome">{animal.name}</h1>
            <p className="nome-latin">{animal.latin_name}</p>
            <h3 className="Habitat">Habitat: {animal.habitat}</h3>
            <h3 className="Local">Localização: {animal.geo_range}</h3>
            <h3 className="Dieta">Diet: {animal.diet}</h3>
        </main>
        <footer>
            <button type="button" className="btn" onClick={getAnimal}>
                Get Another Animal
            </button>
        </footer>   
    </div>
  );
}


export default Animais;