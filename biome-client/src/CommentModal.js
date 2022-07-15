import PostContent from "./PostContent";
import {useEffect, useState} from "react";
import axios from "axios";
import ClickOutHandler from 'react-clickout-handler';

function CommentModal(props) {

  const [comment,setComment] = useState({});

  const visibleClass = props.open ? 'block' : 'hidden';

  useEffect(() => {
    axios.get('http://localhost:4000/comments/'+props.id)
      .then(response => {
        setComment(response.data);
      });
  }, [props.id]);

  function close() {
    setComment({});
    props.onClickOut();
  }

  return (
    <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+visibleClass} style={{backgroundColor:'rgba(0,0,0,.6)'}}>
      <ClickOutHandler onClickOut={() => close()}>
        <div className="border my-4 border-biome_dark-brightest w-3/4 md:w-1/2 bg-biome_dark text-biome_text self-center p-4 mx-auto rounded-md">
          <div className="block overflow-scroll" style={{maxHeight:"calc(100vh - 200px)"}}>
            <PostContent open={true} {...comment} />
          </div>
        </div>
      </ClickOutHandler>
    </div>
  );
}

export default CommentModal;