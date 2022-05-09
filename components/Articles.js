import { useState } from "react";
import { useSelector } from "react-redux";
import Article from "./Article";
import Pagination from "./Pagination";
import Link from 'next/link';

export const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {articles} = useSelector(state => state);
    const articlesPerPage = 9;
    const lastArticle = currentPage * articlesPerPage;
    const firstArticle = lastArticle - articlesPerPage;
    const articlesShort = articles?.list?.slice(firstArticle, lastArticle);

    const paginate = number => {
        setCurrentPage(number);
    }
    return(
        <div>
            {
                articlesShort?.map(article => <div className="my-10 border-4 border-separate border-[#FFF8DC]"><Link href={`/${article.id}`}><a href='#'><Article key={article.id} name={article.title} headline={article.headline} image={article.featured_media.medium_large} category={article.categories.name}></Article></a></Link></div> )
            }
            <Pagination totalarticles={articles?.list?.length} articlesPerPage={articlesPerPage} paginate={paginate}/>
        </div>
    )
}
