import React, {HTMLAttributes, LegacyRef, useEffect, useRef} from 'react';
import {IBook, IVolumeInfo} from "../models/models";
import cl from "./BookCard.module.css";
import {Link, useNavigate} from "react-router-dom";
import defoltIMG from './../img/default-book-thumb.png'

interface IBookCardProps {
    book: IBook
}


const BookCard = ({book}: IBookCardProps) => {
    let box = useRef<HTMLInputElement | null>(null)
    const clickHandler = () => {
        console.log(volumeInfo)
        // console.log(box.current)
        box.current?.classList.remove('hidden')
    }
    let volumeInfo: IVolumeInfo = book.volumeInfo
    return (
        <div className='w-[200px] min-h-[350px] rounded-lg bg-gray-200'>
            <div className={cl.card} onClick={clickHandler}>
                <img className=' h-[200px] '
                     src={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : defoltIMG} alt="image"/>
                <div className='my-[5px] '>{volumeInfo.categories ? volumeInfo.categories.map((el, i) => <em
                    key={i}>{el}{i ? ',' : ''}</em>) : ''}</div>
                <strong className='my-[5px]'>{volumeInfo.title}</strong>
                <div
                    className={'border text-xs max-h-[30px] overflow-hidden duration-700 transition-all ease-linear absolute bottom-0 left-0 right-0 text-center bg-white'}
                    onMouseEnter={(e): void => {
                        let el: HTMLDivElement = e.currentTarget
                        if (el.style)
                            el.classList.remove('max-h-[30px]')
                        el.addEventListener('mouseleave', function () {
                            el.classList.add('max-h-[30px]')
                        })
                    }}>
                    {volumeInfo.authors ? volumeInfo.authors.map((el: string, i) => <em
                        key={i}>{el}{i ? ',' : ''}</em>) : ''}
                </div>
            </div>
                <div className="hidden fixed flex justify-center items-center  right-0 left-0 bg-white/60 h-full top-0 z-50" ref={box}>
                    <div className='w-3/4 h-3/4 bg-gray-300 relative overflow-y-auto p-5'>
                        <img className=' max-h-[500px] float-right'
                             src={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : defoltIMG} alt="image"/>
                        <div className='text-red-600 cursor-pointer absolute top-0 right-[5px] text-lg ' onClick={()=>box.current?.classList.add('hidden')}>✕</div>
                            <div><b>Title: </b> {volumeInfo.title}</div>
                            <div><b>Description: </b> {volumeInfo.description}</div>
                            <div><b>authors: </b> {volumeInfo.authors ? volumeInfo.authors.map((el: string, i) => <em
                                key={i}>{el}{i ? ',' : ''}</em>) : 'not authors('}</div>
                            <div><b>categories: </b> {volumeInfo.categories ? volumeInfo.categories.map((el: string, i) => <em
                                key={i}>{el}{i ? ',' : ''}</em>) : 'not categories('}</div>
                            <div>previewLink: {volumeInfo.previewLink ? <a target="_blank" className='underline' href={volumeInfo.previewLink}>link</a> : 'not link('} </div>

                    </div>
                </div>
        </div>
    );
};

export default BookCard;