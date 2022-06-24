//Custom hooks must always start with the word use
import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {// can't use async here
        fetch(url).then(response => {
            if (!response.ok/* response object returns true or false. Here it checks if the response is not okay.*/) {
                throw Error('Could not fetch the data from that resource.') // If response is not okay, throw this custom error and catch it below.
            }
            return response.json() //THis parses the response to javascript object. Because this is asynchronous, it will return another promise.
        }).then(data => { //Need another .then to get the actual data from the response above
            //This data contains the actual data
            console.log(data)
            setData(data)//Update blog state with data received
            setIsPending(false)//Once data is received, isPending will become false to use it as a flag below to show/hide Loading... message
            setError(null)//Get rid of error message if we try fetching again and it's succesfull.
        })
            .catch(err => { //This will catch any error and fire a function with a param. If there is an issue with the data this will not catch it.
                setIsPending(false)//To hide loading div
                setError(err.message)//Set error variable state to the message and output it to the user
            })
    }, [url]) // Pass the url as dependency. Whenever it changes useEffect will run the fetch

    return { data, isPending, error } //Return all these data
}

export default useFetch