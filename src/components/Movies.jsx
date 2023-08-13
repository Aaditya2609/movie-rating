import React, { useState } from 'react';
import { useMovie } from '../contexts/MovieContext';
import { NavLink } from 'react-router-dom';

function Movies() {
    const { movie, starred, watchLater, updateLocalStorageWatchLater, updateLocalStorageStarred } = useMovie();

    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const HandleStar = (item) => {
        const temp = starred.find(items => items.id === item.id)
        if (temp) {
            const temp2 = starred.filter(items => items.id !== item.id)
            updateLocalStorageStarred(temp2);
        } else {
            const temp2 = [...starred, item]
            updateLocalStorageStarred(temp2);
        }
    };

    const HandleWatchLater = (item) => {
        const temp = watchLater.find(items => items.id === item.id)
        if (temp) {
            const temp2 = watchLater.filter(items => items.id !== item.id)
            updateLocalStorageWatchLater(temp2);
        } else {
            const temp2 = [...watchLater, item]
            updateLocalStorageWatchLater(temp2);
        }
    };

    const filteredMovies = movie.filter(item => {
        const genreCondition = selectedGenre === '' || item.genre.includes(selectedGenre);
        const yearCondition = selectedYear === 0 || item.year <= selectedYear;
        const ratingCondition = selectedRating === 0 || item.rating >= selectedRating;
        const searchQueryLower = searchQuery.toLowerCase();


        let foundInCast = false;
        if (searchQueryLower !== '') {
            foundInCast = item.cast.map(castMember =>
                castMember.toLowerCase().includes(searchQueryLower)
            ).includes(true);
        }

        const searchCondition = (searchQueryLower === '') ||
            item.title.toLowerCase().includes(searchQueryLower) ||
            item.director.toLowerCase().includes(searchQueryLower) || foundInCast;

        return genreCondition && yearCondition && ratingCondition && searchCondition;
    });
    return (
        <div className='flex flex-col p-4 gap-8'>
            <div className='flex flex-row gap-4 items-center justify-center '>
                <label className='text-lg'>Filter by Genre:</label>
                <select onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value=''>All Genres</option>
                    <option value='Action'>Action</option>
                    <option value='Crime'>Crime</option>
                    <option value='Drama'>Drama</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Romance'>Romance</option>
                    <option value='Sci-Fi'>Sci-Fi</option>
                    <option value='Biography'>Biography</option>
                </select>

                <label className='text-lg'>Filter by Release Year:</label>
                <select onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                    <option value={0}>All Years</option>
                    <option value={1990}>Before 1990</option>
                    <option value={1995}>Before 1995</option>
                    <option value={2000}>Before 2000</option>
                    <option value={2005}>Before 2005</option>
                    <option value={2010}>Before 2010</option>
                    <option value={2015}>Before 2015</option>
                    <option value={2020}>Before 2020</option>
                </select>

                <label className='text-lg'>Filter by Rating:</label>
                <select onChange={(e) => setSelectedRating(parseInt(e.target.value))}>
                    <option value={0}>All Ratings</option>
                    <option value={5}>4+</option>
                    <option value={6}>5+</option>
                    <option value={7}>6+</option>
                    <option value={8}>7+</option>
                    <option value={9}>8+</option>
                    <option value={10}>9+</option>
                </select>

                <label className='text-lg text-black font-normal' >Search Movie:</label>
                <input type="text" className='border-2 border-black' placeholder='Search movies by title, cast or director' onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <div className='flex flex-wrap gap-4 items-center justify-center'>
                {filteredMovies.map(item => (
                    <div key={item.id} className='flex flex-col w-1/5 gap-2 items-center card'>
                        <NavLink to={`/${item.id}`}>
                            <div>
                                <img className="h-[25rem]" src={item.imageURL} alt={item.title} />
                            </div>
                            <div>
                                <p className='font-bold text-2xl'>{item.title}</p>
                                <p className='px-7 text-sm summary'>{item.summary}</p>
                            </div>
                        </NavLink>
                        <div className='flex gap-4 items-center'>
                            <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={() => HandleStar(item)}>{starred.find(items => items.id === item.id) ? "Starred" : "Star"}</button>
                            <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={() => HandleWatchLater(item)}>{watchLater.find(items => items.id === item.id) ? "Added to Watch Later" : "Add to Watch Later"}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;

