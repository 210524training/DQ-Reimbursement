import React, {useState} from 'react';
import Sidebar from '../../navbar/Sidebar'
import Navbar from '../../navbar/Navbar'
import Body from '../body/Body';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar />
            <Body />
        </>
    )
}

export default Home