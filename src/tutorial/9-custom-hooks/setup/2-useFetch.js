import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = useCallback(async () => {
        const response = await fetch(url)
        const responseProducts = await response.json()
        setProducts(responseProducts)
        setLoading(false)
    }, [url]);

    useEffect(() => {
        getProducts()
    }, [url, getProducts]);

    return { loading, products }
};