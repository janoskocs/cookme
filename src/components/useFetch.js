//Custom hooks must always start with the word use
import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {// can't use async here
        const abortCont = new AbortController() //This is part of cleanup func. We can associate this with a fetch request which is the 2nd param in fetch. signal: it is associated with the abortCont.signal 

        fetch(url, { signal: abortCont.signal }).then(response => {
            if (!response.ok/* response object returns true or false. Here it checks if the response is not okay.*/) {
                throw Error('Could not fetch the data from that resource.') // If response is not okay, throw this custom error and catch it below.
            }
            return response.json() //THis parses the response to javascript object. Because this is asynchronous, it will return another promise.
        }).then(data => { //Need another .then to get the actual data from the response above
            //This data contains the actual data

            setData(data)//Update blog state with data received
            setIsPending(false)//Once data is received, isPending will become false to use it as a flag below to show/hide Loading... message
            setError(null)//Get rid of error message if we try fetching again and it's succesfull.
        })
            .catch(err => { //This will catch any error and fire a function with a param. If there is an issue with the data this will not catch it.
                if (err.name === 'AbortError') {
                    console.log('fetch aborted') //Once we abort the fetch, it will throw an error and we catch it here. If other errors occur, return below as normal.
                } else {
                    setIsPending(false)//To hide loading div
                    setError(err.message)//Set error variable state to the message and output it to the user
                }

            })

        return () => {
            abortCont.abort();//This will pause fetch
        }
    }, [url]) // Pass the url as dependency. Whenever it changes useEffect will run the fetch

    return { data, isPending, error } //Return all these data
}

export default useFetch