import "./DetailCard.css";
import { IReview } from "../../models/review";
import Comment from "../../components/comment/Comment";
import { ReactComponentElement, useState } from "react";
import Form from "../../components/form/Form";
import { memo } from "react";

interface IDetailCard{
    title:string,
    photos?: string[],
    detailDiscription: string,
    reviews: IReview[],
    age: number,
    rating: number,
    duration: string,
    icons?: string[]
}

export default function DetailCard({title,detailDiscription,reviews,age,rating,duration}:IDetailCard){
    const [rev, setRev] = useState(reviews)

    function createComment(){
        let newComm = rev.slice()
        newComm.push({name: "Sasha", comment: "go rolit", rating:5})
        setRev(newComm)
    }

    return(
        <>
        <div className="Detail__title" onClick={()=>createComment()}><h1>{title}</h1></div>
        <div className="Detail__content">
            <div className="Detail__discription">{detailDiscription}</div>
            <div className="Detail__info">{age}</div>
            <div className="Detail__info">{rating}</div>
            <div className="Detail__info">{duration}</div>
        </div>

        <Form handle={createComment} /> {/*Тут не передается метод*/}
        <h1>Комментарии:</h1>
        <div className="comments">
            {
                rev.map((e)=>{
                    return <Comment name={e.name} comment={e.comment} rating={e.rating} />
                })
            }
        </div>
        </>
    );
}