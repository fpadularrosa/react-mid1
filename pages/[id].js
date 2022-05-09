
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import MyImage from "../components/MyImage";
import { getDetails } from "../store/actions/actions";

const ArticleDetail = ({params}) => {
    const detail = useSelector(state => state.detail);
    const dispatch = useDispatch();

    useEffect(_=> {
        dispatch(getDetails(params.id))
    },[])

    return(
        <div className="mb-20">
        <Layout title='React mid'/>
         <div className="flex mt-10 justify-evenly justify-items-center">
            <div>
                <div className="grid leading-relaxed text-left justify-items-start">
                    <h1 className="text-4xl text-violet-500">{detail?.title}</h1>
                    <h3 className="max-w-3xl pl-4 my-4 text-xl border-l-4">  {detail?.headline}</h3>
                    {detail?.image ? <MyImage src={detail.image} width='800' heigth='523' alt='article'/>: null}
                    <h3 className="my-3 text-xl text-violet-600">Categoría: <p className="ml-2 text-gray-400">{detail?.category}</p></h3>
                    <p className="max-w-4xl text-xl text-neutral-500">{detail?.content}</p>
                </div>
            </div>
            <div>
                <aside className="my-6">
                    <div>
                        {detail?.authorImage ? <div  className='inline-block hover:sepia'><MyImage src={detail.authorImage} width='140' heigth='120' alt='imageAuthor'/> </div>: null}
                        <p className="text-xl">Escrito por <Link className="hover:cursor-pointer" href={`${detail?.pageOfauthor}`}><a target='_blank'  className="text-blue-800 underline border-blue-800 hover:text-blue-400 hover:border-blue-400 hover:underline">{detail?.author}</a></Link></p>
                        <p className="text-md">Publicado {detail?.datePublished}</p>
                    </div>
                </aside>
                <div className="flex justify-center max-w-sm my-16 text-sm">
                    <span>Biografía de autor: 
                    <p className="flex mt-2 text-left max-w-screen-2xl text-md text-neutral-500">{detail?.biography}</p> 
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const params = context.params
    return {
      props: {params},
    }
  }

export default ArticleDetail;