import commentsService from "../../api/commentsService";

export default function AddComments({
   email,
   gameId,
   onCreate,
}) {
    const commentAction = async (formData) => {
        const comment = formData.get('comment');
        
       const createdComment = await commentsService.create(email, gameId, comment);

       onCreate(createdComment)
    }

    return (
        <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" action={commentAction}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
        </article>
    );
}