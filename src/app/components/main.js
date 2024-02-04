/* eslint-disable react-hooks/exhaustive-deps */
// export function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useEffect(() => {
//         function updateSize() {
//             setSize([window.innerWidth, window.innerHeight]);
//         }
//         window.addEventListener('resize', updateSize);
//         updateSize();
//         return () => window.removeEventListener('resize', updateSize);
//     }, []);
//     return size;
// }
import Content from '../home/content'

export default function Main({ HOME, SHOP, CONTACT, ABOUT }) {
    return (
        <main>
            {
                HOME ? (
                    <Content />
                ) : SHOP ? (
                    <>

                    </>
                ) : CONTACT ? (
                    <>

                    </>
                ) : ABOUT ? (
                    <>

                    </>
                ) : null
            }
        </main>
    );
}