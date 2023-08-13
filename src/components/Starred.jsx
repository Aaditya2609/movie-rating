import React from 'react'
import { useMovie } from '../contexts/MovieContext';
import { NavLink } from 'react-router-dom';

function Starred() {
    const { starred,updateLocalStorageStarred } = useMovie();
    const HandleStar=(item)=>{
        const temp=starred.find(items=>items.id===item.id)
        if(temp)
        {
            const temp2=starred.filter(items=>items.id!==item.id)
            updateLocalStorageStarred(temp2);
        }
        else{
            const temp2=[...starred,item]
            updateLocalStorageStarred(temp2);
        }
    }
  return (
    <div className='flex flex-col p-4 gap-4'>
        <p className='font-bold text-3xl'>Starred Movies</p>
            <div className='flex flex-wrap gap-4 items-center justify-center'>
                {starred.map(item => (
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
                        <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={()=>HandleStar(item)}>{starred.find(items=>items.id===item.id)?"Unstar":"Star"}</button>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
        </div>
  )
}

export default Starred