import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovie } from '../contexts/MovieContext';

function SingleMovie() {
    const { movieId } = useParams();

    const { movie, starred, watchLater, updateLocalStorageWatchLater, updateLocalStorageStarred } = useMovie();

    const HandleStar = (item) => {
        const temp = starred.find(items => items.id === item.id)
        if (temp) {
            const temp2 = starred.filter(items => items.id !== item.id)
            updateLocalStorageStarred(temp2);
        }
        else {
            const temp2 = [...starred, item]
            updateLocalStorageStarred(temp2);
        }
    }
    const HandleWatchLater = (item) => {
        const temp = watchLater.find(items => items.id === item.id)
        if (temp) {
            const temp2 = watchLater.filter(items => items.id !== item.id)
            updateLocalStorageWatchLater(temp2);
        }
        else {
            const temp2 = [...watchLater, item]
            updateLocalStorageWatchLater(temp2);
        }
    }
    const currentMovie = movie.find(item => item.id === parseInt(movieId))
    if (!currentMovie) {
        return <div>Loading...</div>;
    }


    return (
        <div className='flex w-1/2 justify-center gap-4 p-8 border-2 m-4'>
            <div>
                <img src={currentMovie.imageURL} alt="movie"/>
            </div>
            <div className='text-left flex flex-col gap-4'>
                <p className='font-bold text-3xl'>{currentMovie.title}</p>
                <p>{currentMovie.summary}</p>
                <p><b>Year: </b>{currentMovie.year}</p>
                <p><b>Genre: </b>{currentMovie.genre.map((item, index) => (
                    <span key={index}>
                        {item}
                        {index !== currentMovie.cast.length - 1 && ', '}
                    </span>
                ))}</p>
                <p><b>Rating: </b>{currentMovie.rating}</p>
                <p><b>Director: </b>{currentMovie.director}</p>
                <p><b>Writer: </b>{currentMovie.writer}</p>
                <p><b>Cast: </b>{currentMovie.cast.map((item, index) => (
                    <span key={index}>
                        {item}
                        {index !== currentMovie.cast.length - 1 && ', '}
                    </span>
                ))}</p>
                <div className='flex gap-4 items-center'>
                    <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={() => HandleStar(currentMovie)}>{starred.find(items => items.id === currentMovie.id) ? "Starred" : "Star"}</button>
                    <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={() => HandleWatchLater(currentMovie)}>{watchLater.find(items => items.id === currentMovie.id) ? "Added to Watch Later" : "Add to Watch Later"}</button>
                </div>
            </div>


        </div>
    )
}

export default SingleMovie