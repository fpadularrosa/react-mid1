const Pagination = ({ totalarticles, articlesPerPage, paginate }) => {
    const arr = [];
    for (let i = 1; i <= Math.ceil(totalarticles / articlesPerPage); i++) {
        arr.push(i)
    }
    return(
        <div className="my-6">
            {
                arr?.map(number => <button className="mx-2 border border-black w-6" key={number} onClick={e => paginate(number)}>{number}</button>)
            }
        </div>
    )
}
export default Pagination;