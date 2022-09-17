import { useEffect, useState } from "react";

const Animais = (props) => {
  const { id, name, latin_name, image_link, geo_range, diet, habitat} = props.animaisUnico; 

function Animais() {
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
    console.log(data)
  };

  return (
    <div className="container">
        <header>
            <img src={image_link} alt="{name}" width="350" />
        </header>
        <main>
            <h1>{name}</h1>
            <p className="animal">{latin_name}</p>
        </main>
        <footer>
            <button type="button" className="btn" onClick={getAnimal}>
                Get Another Animal
            </button>
        </footer>   
    </div>
  );
}}


export default Animais;