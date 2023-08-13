import React, { useState } from 'react'
import { useMovie } from '../contexts/MovieContext';

function AddMovie({ setShowModal }) {
    const { movie,updateLocalStorage } = useMovie();
    const [error, setError] = useState("")
    const [tempMovie, setTempMovie] = useState({
        id: 0,
        title: '',
        year: 0,
        genre: '',
        rating: 0,
        director: '',
        writer: '',
        cast: '',
        summary:
          '',
        imageURL:
          '',
    })
    const handleAddProduct = () => {
        if (tempMovie.title === "") {
            setError("Enter Valid Movie Title")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary === "") {
            setError("Enter Valid Movie Summary")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast === "") {
            setError("Enter Valid Movie Cast")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast !== "" && tempMovie.year === 0) {
            setError("Enter Valid Movie Year")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast !== "" && tempMovie.year !== 0 && tempMovie.genre === "") {
            setError("Enter Valid Movie Genre")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast !== "" && tempMovie.year !== 0 && tempMovie.genre !== "" && tempMovie.director === '') {
            setError("Enter Valid Movie Director")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast !== "" && tempMovie.year !== 0 && tempMovie.genre !== "" && tempMovie.director !== "" && tempMovie.writer === "") {
            setError("Enter Valid Movie Writer")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast !== "" && tempMovie.year !== 0 && tempMovie.genre !== "" && tempMovie.director !== "" && tempMovie.writer !== "" && tempMovie.rating === 0) {
            setError("Enter Valid Movie Rating")
        }
        else if (tempMovie.title !== "none" && tempMovie.summary !== "" && tempMovie.cast !== "" && tempMovie.year !== 0 && tempMovie.genre !== "" && tempMovie.director !== "" && tempMovie.writer !== "" && tempMovie.rating !== 0 && tempMovie.imageURL === "") {
            setError("Enter Valid Movie ImageUrl")
        }
        else {
            const genreArray = tempMovie.genre.split(' ');
            const castArray = tempMovie.cast.split(' ');

            const temp = { ...tempMovie, id: movie.length + 1, genre: genreArray, cast: castArray };
            const temp2 = [...movie, temp];
            updateLocalStorage(temp2);
            setShowModal(false);
        }

    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
            <div className="bg-white p-4 w-[40%]">
                <div className='flex items-center justify-between px-16'>
                    <p className='text-3xl'>Add Product</p>
                    <button
                        className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
                        onClick={() => setShowModal(false)}
                    >
                        X
                    </button>
                </div>
                <div className='flex flex-col gap-2  items-center font-semibold text-xl'>
                    <label className='flex flex-col text-left w-4/6'>Title
                        <input className='border-2 border-black' onChange={(e) => setTempMovie({ ...tempMovie, title: e.target.value })}>
                        </input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Summary
                        <input onChange={(e) => setTempMovie({ ...tempMovie, summary: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Cast
                        <input onChange={(e) => setTempMovie({ ...tempMovie, cast: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Year
                        <input onChange={(e) => setTempMovie({ ...tempMovie, year: parseInt(e.target.value) })} className='border-2 border-black' type="number" step="any" />
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                       Genre
                        <input onChange={(e) => setTempMovie({ ...tempMovie,genre: e.target.value})} className='border-2 border-black'/>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                       Director
                        <input onChange={(e) => setTempMovie({ ...tempMovie, director: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                      Writer
                        <input onChange={(e) => setTempMovie({ ...tempMovie, writer: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Rating
                        <input onChange={(e) => setTempMovie({ ...tempMovie, rating: parseInt(e.target.value) })} className='border-2 border-black' type="number" />
                    </label>
                    <label onChange={(e) => setTempMovie({ ...tempMovie, imageURL: e.target.value })} className='flex flex-col text-left w-4/6'>
                        Image URL
                        <input className='border-2 border-black'></input>
                    </label>
                    {error}
                    <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={() => handleAddProduct()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default AddMovie