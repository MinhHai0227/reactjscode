import Comment from "./Comment";

function CommentList(){
    return(
        <div className="p-2 mt-3 space-y-3">
            <Comment/>
            <Comment/>
        </div>
    )
}
export default CommentList;