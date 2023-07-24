import Pet from "./Pet.jsx";

function Results({pets}) {
    return (
        <div className="search">
            {!pets.length ? (<h1>No pets found...</h1>) : (pets.map(({id, name, animal, breed, images, city, state }) => (
                <Pet
                    key={id}
                    name={name}
                    breed={breed}
                    animal={animal}
                    location={`${city} - ${state}`}
                    images={images}

                />
            )))}
        </div>
    );
}

export default Results;