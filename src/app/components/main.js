/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, Suspense } from 'react'
const HOME_CONTENT = lazy(() => import('../home/content'))

export default function Main({ HOME, SHOP, CONTACT, ABOUT, WISHLIST, ACCOUNT, CART, children }) {
    return (
        <main>
            <Suspense fallback={<div className="loader">Loading...</div>}>
            {
                HOME ? (
                    <HOME_CONTENT />
                ) : 
                SHOP ? (
                    <>
                        {children}
                    </>
                ) : 
                CONTACT ? (
                    <>
                        {children}
                    </>
                ) : 
                ABOUT ? (
                    <>
                        {children}
                    </>
                ) : 
                WISHLIST ? (
                    <>
                        {children}
                    </>
                )
                : ACCOUNT ? (
                    <>
                        {children}
                    </>
                )
                : CART ? (
                    <>
                        {children}
                    </>
                )
                : null
            }
            </Suspense>
        </main>
    );
}