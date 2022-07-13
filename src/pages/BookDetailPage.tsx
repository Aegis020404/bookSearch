import React from 'react';
import {useParams} from "react-router-dom";
import {IBook} from "../models/models";
interface IBookDetaProps {
    book: IBook
}
const BookDetailPage = ( {book}: IBookDetaProps ) => {
    const params = useParams<'id'>()
    return (
        <div className='container mx-auto pt-5 max-w-[760px]'>
            <h1>book {params.id}</h1>
        </div>
    );
};

export default BookDetailPage;