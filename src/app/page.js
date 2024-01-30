'use client'
import Header from './components/header'
import Footer from './components/footer'
export default function Home() {
  return (
    <>
    <Header />
    <main>
      <div className="banner">
        <h1>Welcome to the new era of e-shopping.</h1>
        <button>Shop Now</button>
      </div>
    </main>
    <Footer />
    </>
  );
}
