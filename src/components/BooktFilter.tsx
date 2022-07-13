import React from 'react';

interface IBooktFilter {
    setOrder: React.Dispatch<React.SetStateAction<string>>
    setCategories: React.Dispatch<React.SetStateAction<string>>
    orderS: string
    categoriesS: string
}

const BooktFilter = ({setOrder,setCategories,orderS, categoriesS}:IBooktFilter) => {


    const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        setOrder(e.target.value)
    }
    const onChangeCategories = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        setCategories(e.target.value)
    }

    return (
        <div>
            <div>
                <span>Sorting by:</span>
                <select value={orderS} name="" id="" className='hover:outline-0 hover:border-0 outline-0 border-0 mx-[5px] cursor-pointer bg-gray-200' onChange={onChangeSort}>
                    <option value="relevance">relevance</option>
                    <option value="newest">newest </option>
                </select>
            </div>
            <div>
                <span>Categories:</span>
                <select value={categoriesS} name="" id="" className='hover:outline-0 hover:border-0 outline-0 border-0 mx-[5px] cursor-pointer bg-gray-200' onChange={onChangeCategories}>
                    <option value="">all</option>
                    <option value="art">art </option>
                    <option value="biography">biography </option>
                    <option value="computers">computers </option>
                    <option value="history">history </option>
                    <option value="medical">medical </option>
                    <option value="poetry">poetry </option>
                </select>
            </div>
        </div>
    );
};

export default BooktFilter;