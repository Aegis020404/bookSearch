import React, {useState} from 'react';
import BookSearch from "../components/BookSearch";
import BooktFilter from "../components/BooktFilter";
import BookCard from "../components/BookCard";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import Pagination from "../components/Pagination";

const MainPage = () => {
    const [page, setPage] = useState(0)
    const [order, setOrder] = useState("relevance")
    const [categories, setCategories] = useState("relevance")
    const dispatch = useAppDispatch()
    const {loading, error, books,count,pag , orderS, categoriesS} = useAppSelector(state => state.book)



    return (
        <div className='container mx-auto pt-5'>
            <BookSearch order={order} page={page} categories={categories}/>
            <BooktFilter setOrder={setOrder} setCategories={setCategories} categoriesS={categoriesS} orderS={orderS}/>
            <h1>Найдено {count}</h1>
            <Pagination pag={pag} setPage={setPage} count={count} />
            {loading ? <div className='text-center text-lg'>loading...</div> : ''}
            {error ? <div className='text-center text-lg text-red-600 '>{error}</div> : ''}
            <div className='flex flex-wrap	gap-3 justify-evenly'>{books ?  books.map((el, i) => <BookCard key={i} book={el}/>) : `Нету книг`}
            </div>
            <Pagination pag={pag} setPage={setPage} count={count} />
        </div>
    );
};

export default MainPage;