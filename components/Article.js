import MyImage from "./MyImage";
const Article = (props) => {
    
    return(
        <div className='flex justify-center h-[349px] '>
            <MyImage class='w-full h-72 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg' src={`${props.image}`} width='500' heigth='349' alt='article'/>
            <div class="flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <h1 className='mb-2 text-2xl font-medium text-gray-900'>{props.name}</h1>
                <h2 className='text-base text-gray-700'>{props.headline}</h2>
            </div>
     </div>
    )
}
export default Article;