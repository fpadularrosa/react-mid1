import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Articles } from '../components/Articles';
import Layout from '../components/Layout';
import Searchbar from '../components/SearchBar';
import { getArticles } from '../store/actions/actions';

const Home = _ => {
    const {articles} = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getArticles())
    }, []);
    return(
        <div>
            <Layout title='React mid'/>
            <Searchbar/>
            {}
           {articles?.list?.length ? 
                <div className='grid justify-items-center'>
                    <Articles/>
                </div> 
                : 
                
                <div className="grid justify-items-center space-x-2 mb-[27rem] mt-32">
                        {articles?.message ? <h1 className='my-8 text-4xl context-center'>{articles.message}</h1> : null }
                        <div className="inline-block w-12 h-12 border-4 rounded-full spinner-border animate-spin" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                        <div className="inline-block w-12 h-12 bg-current rounded-full opacity-0 spinner-grow" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>}

            </div>
        )
}



export default Home;