const animals = ['bird', 'cat', 'rabbit', 'reptile'];
const breeds = [];
function SearchParams() {
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"/>

                <label htmlFor="animal">Animals</label>
                <select
                    name="animal"
                    id="animal">

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