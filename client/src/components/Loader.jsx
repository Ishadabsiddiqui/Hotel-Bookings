import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom';

const Loader = () => {
    const { navigate } = useAppContext();
    const { nextUrl } = useParams();

    useEffect(() => {
        if (nextUrl) {
            setTimeout(() => {
                navigate(`/${nextUrl}`)
            }, 8000)
        }
    }, [nextUrl]);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='animate-spin rounded-full w-24 h-24 border-4 border-gray-400 border-t-primary'>

            </div>
        </div>
    )
}

export default Loader
