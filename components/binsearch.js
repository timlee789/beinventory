import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResults from './SearchResult';
import cla from './form.module.css';


export default function Binearch() {
        const [queryText, setQueryText] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = (e) => setQueryText(e.target.value)

	useEffect(() => {
		if (!queryText) {
			setSearchResults([])
			//return false
		}
		;(async () => {
			const url = 'http://192.168.1.83:8000/binsearch'

			const { data } = await axios.get(url, {
				params: {
					bin: queryText,
				},
			})

			setSearchResults(data)
		})()
	}, [queryText])
		const resetInputField = () => {
			setQueryText('')
		}
        return (
			<div className={cla.card}>
			<div className={cla.pagetitle}>BIN SEARCH</div>
			  <div className={cla.formbody}>
				
                        <input
                        type='text'
                        placeholder='Bin Search'
                        value={queryText}
                        onChange={handleChange}
						className={cla.form}
						autoFocus={true}
                        />
						<button onClick={resetInputField} className={cla.resetBtn}>Reset</button>
                        {queryText && <SearchResults searchResults={searchResults} />}
                </div>
			
				</div>
        )

}