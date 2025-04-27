import { useState } from "react"
import "./Comment.css"
import Form from "./Form";

export default function Comment() {
    let [comments, setComment] = useState([{ fullName: "Mona", Remark: "Great job", Rating: 4 }]);

    let addNewComment = (comment) => {
        setComment((currData) => [...currData, comment]);
    }

    return (
        <>
            <h1>Comments!</h1>


            {comments.map((comment, idx) => {
             return   <div key={idx} className="comment">
                    <span >{comment.Remark}</span>
                    &nbsp; &nbsp; &nbsp;
                    <span>({comment.Rating})</span>
                    <p>-@{comment.fullName}</p>
                </div>
            })}

            <Form addNewComment={addNewComment} />
        </>

    )
}