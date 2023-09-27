import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const backendVersion = () => {
    const [data, setData] = useState("")
    const fetchVersion = async () => {
        const res = await axios.get('')
        setData(res.data.Laravel)
    }
    useEffect(() => {
        fetchVersion()
    })

    return <div className='p-[1rem] text-[18px]'>Your backend is using larvel {data}</div>
}

export default backendVersion
