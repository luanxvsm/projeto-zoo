function Home() {
    return (
      <div>
        <h1>Sydney ZOO</h1>
        <p>Sydney Zoo was founded in 2015 with an aim to create amazing experiences for the local and international community by introducing them to a range of animal species from all over the world, while also educating on animal welfare and conservation.</p>
        <h2>A World class zoo</h2>
        <p>Embracing advanced technology and innovation to improve animal welfare, visitor engagement and education, Sydney Zoo is home to a wide range of exotic and native species. With clever habitat design, we provide an experience that is more immersive and engaging than traditional zoos.

        Sydney Zoo is home to over 4,000 animals, Australia's largest Reptile and Nocturnal House and an aquarium.</p>
        <h2>Our Animals</h2>
        <div className="row">
          <div className="coluna">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg" alt="animal" className="animalp1"/>
          </div>
          <div className="coluna">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Saddle-billed_Stork_in_flight.jpg" alt="animal" className="animalp2"/>
          </div>
          <div className="coluna">
          <img src="https://images.fineartamerica.com/images-medium-large-5/1-trinidad-motmot-blue-crowned-motmot-ken-archer.jpg" alt="animal" className="animalp3"/>
          </div>
        </div>
      </div>
    );
  }

export default Home;