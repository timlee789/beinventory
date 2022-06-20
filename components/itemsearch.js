import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Inresultsearch from './inresultsearch'
import Additem from './Additem';

export default function Search() {
        const [queryText, setQueryText] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = (e) => setQueryText(e.target.value)

	useEffect(() => {
		if (!queryText) {
			setSearchResults([])
			//return false
		}
		;(async () => {
			const url = 'http://192.168.1.101:8000/itemsearch'

			const { data } = await axios.get(url, {
				params: {
					item_code: queryText,
				},
			})

			setSearchResults(data)
		})()
	}, [queryText])
	const resetInputField = () => {
		setQueryText('')
	}
        return (
                <div>
                        <input
                        type='text'
                        placeholder='Item_Code'
                        value={queryText}
                        onChange={handleChange}
                        />
						<button onClick={resetInputField} className={cla.resetBtn}>Reset</button>
                        {queryText && <Inresultsearch searchResults={searchResults} />}
                </div>
        )

}