import React, { useEffect } from "react";
import {useState, UseEffect} from React

export const UseFetch = (url) => {
    const [data, setData] = useState (null)

    useEffect (() => {
        const fetchData = async () => {
            res = await fetch(url)
            const json = await res.json()
            setData(json)

        }
        fetchData()
    }, [url])
    return{data};
}