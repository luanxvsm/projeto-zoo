import { useEffect, useState } from "react";

const Animais = (props) => {
  const {latin_name, image_link, geo_range, diet, habitat} = props.animaisUnico;
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
    setAnimal(data.value);
    setAnimal(data.slice(0,10))
  };

  return (
    <div className="container">
        <header>
            <img src={image_link} alt="{animal}" width="350" />
        </header>
        <main>
            <h1>{animal}</h1>
            <p className="animal">{latin_name}</p>
            <h3>Habitat: {habitat}</h3>
            <h3>Localização: {geo_range}</h3>
            <h3>Diet: {diet}</h3>
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