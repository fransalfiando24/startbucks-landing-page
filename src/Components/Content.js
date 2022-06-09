import React, {useState} from 'react'
import img from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import thumb1 from '../images/thumb1.png'
import thumb2 from '../images/thumb2.png'
import thumb3 from '../images/thumb3.png'
import './Content.css'


function Content() {
    const [image, setImage] = useState(img);
    const [color, setColor] = useState("#017143");


    return (
        <div className="content-container">
            <div className="circle" style={{background: color}}></div>
            <div className="content">
                <div className="textbox">
                    <h2>It's not just Coffee<br/>It's <span>Starbucks</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex modi voluptates tempore expedita dignissimos distinctio et culpa, repudiandae quaerat. Explicabo molestiae in maiores ut quod asperiores dignissimos iusto! Adipisci.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="imgBox">
                    <img src={image} className="starbucks"/>
                </div> 
            </div>
            <ul className="thumb">
                <li><img src={thumb1} onClick={() => { setImage(img); setColor("#017143")}}/></li>
                <li><img src={thumb2} onClick={() => { setImage(img2); setColor("#eb7495")}}/></li>
                <li><img src={thumb3} onClick={() => { setImage(img3); setColor("#d752b1")}}/></li>
            </ul>
        </div>
    )
}

export default Content
