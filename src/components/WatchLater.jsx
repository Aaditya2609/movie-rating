import React from 'react'
import { NavLink } from 'react-router-dom';
import { useMovie } from '../contexts/MovieContext';

function WatchLater() {
    const {watchLater,updateLocalStorageWatchLater } = useMovie();
    const HandleWatchLater=(item)=>{
        const temp=watchLater.find(items=>items.id===item.id)
        if(temp)
        {
            const temp2=watchLater.filter(items=>items.id!==item.id)
            updateLocalStorageWatchLater(temp2);
        }
        else{
            const temp2=[...watchLater,item]
            updateLocalStorageWatchLater(temp2);
        }
    }
  return (
    <div className='flex flex-col p-4 gap-4'>
        <p className='font-bold text-3xl'>Watch List</p>
            <div className='flex flex-wrap gap-4 items-center justify-center'>
                {watchLater.map(item => (
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
                            <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold'onClick={()=>HandleWatchLater(item)}>{watchLater.find(items=>items.id===item.id)?"Remove from Watch Later":"Add to Watch Later"}</button>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
        </div>
  )
}

export default WatchLater