'use client'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'

export default function Shop() {
    return (
        <>
            <Header />
            <Main 
                HOME={false} 
                SHOP={true} 
                CONTACT={false} 
                ABOUT={false} 
            />
            <Footer />
        </>
    )
}