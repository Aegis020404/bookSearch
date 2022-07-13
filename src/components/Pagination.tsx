import React from 'react';
import ReactPaginate from "react-paginate";

interface IPaginationProps {
    setPage: React.Dispatch<React.SetStateAction<number>>
    count: number | boolean
    pag:number
}


const Pagination = ({setPage, count, pag}: IPaginationProps) => {

    const handlePageClick = (e: { selected: number }): void => {
        setPage(() => (e.selected * 30))
        window.scrollTo(0,0)
        // console.log(e.selected * 30)
        // console.log(e.selected)
        // console.log(count)
        // console.log(count)
        // console.log(page)
        // console.log(~~(+count / 30)/+count)
    }
    // console.log(~~((+count-page )/ 30))
    return (
        <ReactPaginate
            className='flex pag-[10] justify-center mt-[10px] gap-[10px] py-[15px]'
            breakLabel="..."
            nextLabel=">"
            forcePage={(pag/30)}
            previousLabel="<"
            pageRangeDisplayed={5}
            pageCount={~~(+count / 30 )}
            // previousClassName='py-1 px-2 border mr-2 rounded-full'
            // nextClassName='py-1 px-2 border mr-2 rounded-full'
            activeLinkClassName='text-yellow-400 cursor-default'
            onPageChange={handlePageClick}
        />
    );
};

export default Pagination;