function Pet({name, breed, animal, location, images}) {

    const hero = images.length ? images[0] : "http://pets-images.dev-apis.com/pets/none.jpg"

    return (
        <div className="pet">
            <div className="image-container">
                <img src={hero}  alt={name}/>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <h3>{animal} - {breed} - {location}</h3>
            </div>
        </div>
    );
}

export default Pet;