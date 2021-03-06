import {Link} from "react-router-dom";
import PostContent from "./PostContent";

function Post(props) {

  const postClasses = "block border border-biome_border bg-biome_dark-brighter p-2 rounded-md " + (props.open ? "" : "hover:border-biome_text cursor-pointer");
  return (
    <div className="px-6 text-biome_text pb-4">
      {props.open && (
        <div className={postClasses}>
          <PostContent {...props} />
        </div>
      )}
      {!props.open && (
        <Link to={{pathname:'/comments/'+props._id,state:{commentId:props._id}}} className={postClasses}>
          <PostContent {...props} />
        </Link>
      )}


    </div>
  );
}

export default Post;