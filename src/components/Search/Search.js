import React, { useState } from 'react';
import imageAPI from 'DAO/image.DAO';
import './Search.css';

function Search() {
    const [id, setId] = useState([])
    const [images, setImages] = useState([])
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState('disable-none')
    const [lastSearch, setLastSearch] = useState(new Set(localStorage.getItem('searchItem')?.split(',')))

    const addLocalStorage = () => {
        let imgArr = []
        for (let i = 0; i < images.length; ++i) {
            imgArr.push(images[i])
        }
        localStorage.setItem("id", id)
        localStorage.setItem(search, imgArr)
    }

    const addSearchItem = () => {
        let tmp = lastSearch

        if (tmp.has(search)) {
            tmp.delete(search)
            tmp.add(search)
        } else if (tmp.size < 5) {
            tmp.add(search)
        } else {
            let arr = [...tmp]
            arr.shift()
            arr.push(search)
            tmp = new Set(arr)
        }

        setLastSearch(tmp)
        localStorage.setItem("searchItem", [...tmp])

    }

    const getImages = async () => {
        setDisplay('disable-none')
        if (localStorage.getItem(search)) {
            setId(localStorage.getItem("id").split(','))
            setImages(localStorage.getItem(search).split(','))
        } else {
            let idArr = []
            let imagesArr = []
            const data = await imageAPI.getImages(search);
            for (let i = 0; i < data.results.length; ++i) {
                imagesArr.push(data.results[i].urls.thumb)
                idArr.push(data.results[i].id)
            }
            setId(idArr)
            setImages(imagesArr)
            addLocalStorage()
        }

        addSearchItem()
    }

    return (
        <div className='bg'>
            <h1>Search Free Photos</h1>
            <div className='main d-flex mx-auto justify-content-center position-relative border-none my-auto'>
                <input
                    placeholder='Search photos'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    onClick={() => { setDisplay('disable-block') }}
                />
                <div className={`position-absolute autocomplete ${display}`}>
                    {[...lastSearch]?.reverse().map((item, index) => {
                        if (item.search(search) !== -1) { return <p key={`${id[index]}${index}`} onClick={() => { setSearch(item); setDisplay('disable-none') }}> {item} </p> } else { return null }
                    })}
                </div>

                <button src='button' onClick={() => { if (search) { getImages() } }} className='btn-primary ml-2 my-auto'>Search</button>
            </div>

            <div className='hr'></div>

            <div className='d-grid container'>
                {images.map((item, index) =>
                    <div className='image-height overflow-hidden' key={id[index]}> <img alt={search} src={item} className='w-100' /> </div>
                )}
            </div>
        </div>
    );
}

export default Search;
