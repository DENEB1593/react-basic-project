import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const decriptions = ['Fundanmental', 'Crucial', 'Core'];

function genRandom(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {decriptions[genRandom(2)]} Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}