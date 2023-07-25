import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

export default function Footer(){
    return(
        <footer>
            <a href="https://twitter.com/zf_mackie"><img src={twitter} alt="twitter" /></a>
            <a href="https://facebook.com/femi.mackie"><img src={facebook} alt="facebook" /></a>
            <a href="https://instagram.com/zf_mackie"><img src={instagram} alt="whatsapp" /></a>
            <a href="https://github.com/zealfemi"><img src={github} alt="github" /></a>
        </footer>
    )
}