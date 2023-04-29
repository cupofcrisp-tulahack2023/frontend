import "./Form.css";
import Comment from "../comment/Comment";
import { useState } from "react";
import { IReview } from "../../models/review";

export default function Form(handle: ()=>void){

    return(
        <div className="comment__form">
                <input type="text" name="name"/>
                <input type="text" name="comment"/>
                <input type="text" name="rating"/>
                {/* тут надо передать инфу из инпутов, видел реалезацию через стейт и он чендж , однаком мне кажется , что это лишние перерендеры добавит */}
                <button className="create__comment__button" onClick={(()=>handle())}>click!</button>
        </div>  
        );
}