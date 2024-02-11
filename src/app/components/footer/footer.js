import './footer.css'

export default function Footer({ toggler }) {
    // const gotoMyPortfolio = () => {
    //     window.open("https://github.com/MaitisamY/", "_blank");
    // }
    return (
        <footer onClick={() => toggler('close')}>
            <p>&copy; {new Date().getFullYear()}, E-BUUY.</p>
            {/* <span>Made with ❤️ by 
                <a target="_blank" rel="noopener noreferrer" onClick={gotoMyPortfolio}> Aitisam Yaseen</a>
            </span> */}
        </footer>
    );
}