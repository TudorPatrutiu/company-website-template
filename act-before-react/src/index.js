import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AboutUs from './components/AboutUs';
import logo from './images/logo192.png'

// const h1 = document.createElement("h1")
// h1.textContent = "I'm learning react"
// h1.className = "header"
// const element = <h1 className='header'> This is a JSX</h1>
// console.log(element)
// document.getElementById("root").append(h1)

const page = (
    <div className='navigation'>
        <img src={logo}></img>
        <h1>Fun facts about react</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page
    // <div>
    //     <AboutUs />
    // </div>
    )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();