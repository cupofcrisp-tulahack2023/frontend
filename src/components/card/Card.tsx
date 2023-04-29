import "./Card.css"

interface ICard{
    title : string,
    photo?: string,
    shortDiscription: string,
    rating: number,
    age: number,
    interest: string[],
    duration: string,
    complexity: string,
    type: string,
    icons?:  string[],
    url: string
}

export default function Card({title,shortDiscription,rating,age,interest,duration,complexity,type,url}:ICard){
    return(
        <div className="card">
            <div className="card__title card__container">{title}</div>
            <div className="card__discription card__container">{shortDiscription}</div>
            <div className="card__rating card__container">{rating}</div>
            <div className="card__age card__container">{age}</div>
            <div className="card__interest card__container">{interest.join(',')}</div>
            <div className="card__duration card__container">{duration}</div>
            <div className="card__complexity card__container">{complexity}</div>
            <div className="card__type card__container">{type}</div>
        </div>
    );
}