import {useState} from "react";

const animals = ['bird', 'cat', 'rabbit', 'reptile'];
const breeds = [];
function SearchParams() {

    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                    value= {location}
                    onChange={(e) => setLocation(e.target.value)}
                />


                <label htmlFor="animal">Animals</label>
                <select
                    name="animal"
                    id="animal"
                    value= {animal}
                    onChange={(e) => setAnimal(e.target.value)}>

                    {animals.map((animal) => (
                        <option
                            value={animal}
                            key={animal}>
                            {animal}
                        </option>
                        ))}
                </select>
                <label htmlFor="breed">Breed</label>
                <select
                    name="breed"
                    id="breed"
                    disabled={!breeds.length}
                    value= {breed}
                    onChange={(e) => setBreed(e.target.value)}
                >

                    {breeds.map((breed) => (
                        <option
                            value={breed}
                            key={breed}>
                            {breed}
                        </option>
                    ))}
                </select>

            </form>
        </div>
    );
}

export default SearchParams;