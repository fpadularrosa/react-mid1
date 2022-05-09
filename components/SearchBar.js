import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {getArticlesByName, getRelevant} from '../store/actions/actions'

const Searchbar = () => {
    const [nombre, setNombre] = useState('');
    const [relevant, setRelevant] = useState('');
    const dispatch = useDispatch();
    const {articles} = useSelector(state => state);
    const handleChange = e => {
        setNombre(e.target.value);
    };
    
    const relevantSort = e => {
        e.preventDefault();
        setRelevant(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(relevant === 'relevant' && nombre){
            dispatch(getRelevant(nombre));
            setNombre('');
            setRelevant('');
            return;
        }else if(relevant === 'norelevant' && nombre){
            dispatch(getArticlesByName(nombre));
            setNombre('');
            return;
        }
        dispatch(getArticlesByName(nombre));
        setNombre('');
    };
    return(
        <>
            <div className='flex justify-evenly' id="container-searchbar">
                <h2 className='ml-8 text-lg'>Encontrados: {articles?.numOfarticles}</h2>
                    <div className="mb-3 xl:w-96">
                    <div className='flex'>
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="relative flex pt-2 mx-auto text-gray-600">                   
                                <input className='relative inline-block h-10 px-5 pr-16 bg-white border-2 border-gray-300 rounded-lg text-md focus:outline-none' type="search" name="name" id="input-articles" placeholder='Buscar articulos' value={nombre} onChange={handleChange}/>
                                <button className='absolute inline-block max-w-sm mt-3 ml-60' type="submit">
                                    <svg className="w-4 h-4 text-gray-600 fill-current " xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXxlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966" style={{enableBackground : 'new 0 0 56.966 56.966' }} xmlXspace="preserve"
                                    width="512px" height="512px">
                                    <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </div>         
                        </form>
                    </div>
                    <select className='inline-block w-full px-2 py-1 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' 
                                aria-label="Default select example"
                                onChange={relevantSort} 
                                name='relevants'>
                                <option selected>Abrir menú de selección</option>
                                <option value='relevant'>Obtener más relevantes</option>
                                <option value='norelevant'>No quiero relevantes</option>
                            </select>
                    </div>
            </div>
        </>
    )
}
export default Searchbar;