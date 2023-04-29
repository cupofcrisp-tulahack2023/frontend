import "./Comment.css";
import { IReview } from "../../models/review";

export default function Comment({name,comment,rating}:IReview){
    return(
        <div className="comment">
            {name}<br></br>
            {comment}<br></br>
            {rating}
        </div>
    )
}