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
            <img src={animal.image_link} alt="{animal}" className="img-animal" width="350" />
            <h1 className="nome">{animal.name}</h1>
            <h4 className="nome-latin">({animal.latin_name})</h4>
            <p className="Habitat"><strong>Habitat:</strong> {animal.habitat}</p>
            <p className="Local"><strong>Localization:</strong> {animal.geo_range}</p>
            <p className="Dieta"><strong>Diet:</strong> {animal.diet}</p>
            <footer>
              <button type="button" className="btn" onClick={getAnimal}>
                  Get Another Animal
              </button>
            </footer>
    </div>
  );
}


export default Animais;