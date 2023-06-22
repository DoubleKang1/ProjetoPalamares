import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <u className="social_list">
                <li>
                    <a href="https://www.linkedin.com/in/thaynan-ferreira-souza-451225177/" target="_blank"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rafael-domingos-alves-/" target="_blank"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://github.com/DoubleKang1" target="_blank"><FaGithub /></a>
                </li>
            </u>
            <p className="copy_right">
                <span>Rafael | Thaynan</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;