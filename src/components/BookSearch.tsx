import React, {useEffect} from 'react';
import {useInput} from "../hook/input";
import {useDebounce} from "../hook/debounce";
import {fetchBooks} from "../store/actions/bookAction";
import {useAppDispatch} from "../hook/redux";

interface IBookSearch {
    order: string
    categories: string
    page: number
}

const BookSearch = ({order,categories,page}:IBookSearch) => {
    const dispatch = useAppDispatch()
    const input = useInput('')
    const debounce = useDebounce<string>(input.value)

    useEffect(()=> {
        dispatch(fetchBooks(page,debounce,order,categories))
    },[debounce,order,categories,page])
    return (
        <div className='  py-2 px-4 mb-4 relative'>
            <input type="text"
                   className='border py-2 px-4 mb-1 outline-0 w-full'
                   placeholder='Type searching book...'
                   {...input}
            />

            {/*<div className="absolute left-0 right-0 h-[45px] bg-fuchsia-100 top-[45px] shadow-md"></div>*/}

        </div>
    );
};

export default BookSearch;