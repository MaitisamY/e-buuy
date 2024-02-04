'use client'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
export default function Home() {
  return (
    <>
      <Header /> 
      <Main 
          HOME={true} 
          SHOP={false} 
          CONTACT={false} 
          ABOUT={false} 
      />
      <Footer />
    </>
  );
}
