import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { detailsID } = useParams();
    const books = useLoaderData()
    const my_book = books.filter(book => book.id == detailsID)
    console.log(my_book)




    console.log(detailsID)
    return (
        <div>
            {books.length}

            {

                <div>
                    <h1>{my_book[0].name}</h1>
                    <h1>{my_book[0].price}</h1>
                </div>

            }


        </div>
    );
};

export default Details;