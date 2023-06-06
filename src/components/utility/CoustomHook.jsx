import { useContext, useEffect, useState } from "react"
import { Context } from "../context/AuthContext";
import { useQuery } from '@tanstack/react-query';

const useCoustom = (category) => {

    const [allData, setData] = useState([])
    const [categoryData, setcategory] = useState([])
    
    const { user } = useContext(Context)



    //category wise manuData fetching
    useEffect(() => {
        fetch(`http://localhost:5000/manu?category=${category}`)
            .then(res => res.json())
            .then(res => {
                setcategory(res)
            })
    }, [category])



    //all manu data fetching
    useEffect(() => {
        fetch('http://localhost:5000/manu')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])


    

    // user OrderData fecthing using email
    const { refetch, data:orderData=[] } = useQuery({
        queryKey: ['orderData', user?.email],
        queryFn: async () => {
            const orderDataFetching = await fetch(`http://localhost:5000/orderData?email=${user?.email}`)
            const contJson = await orderDataFetching.json()
            return contJson
        }
    })


    const { data:users= [], refetch:userRefetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const userData = await fetch('http://localhost:5000/user')
            const toConvert = userData.json();
            return toConvert
        }
    })

    return { allData,categoryData,orderData,refetch,users,userRefetch }

}

export default useCoustom