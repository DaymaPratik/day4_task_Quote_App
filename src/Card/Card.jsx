import './Card.css'


const Card = (props) => {
    console.log(props.item);
    return (
        <div className='card'>
            <img src="https://cdn-icons-png.flaticon.com/128/9664/9664292.png" alt="" />
            <h2>{props.item.quote}</h2>
            <p>--{props.item.author}--</p>
        </div>
    );
}

export default Card;
