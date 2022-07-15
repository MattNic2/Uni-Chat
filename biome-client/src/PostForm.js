import Avatar from "./biomeavatar.png";
import {useContext} from "react";
import PostFormModalContext from "./PostFormModalContext";
import Lancer from "./Lancer.png"

function PostForm() {
  const modalContext = useContext(PostFormModalContext);
  return (
    <div className="bg-biome_dark px-6 py-4 text-gray-400">

      <div className="border border-biome_border p-2 rounded-md flex bg-biome_dark-brighter">
        <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
          <img src={Lancer} alt="" />
        </div>
        <form action="" className="flex-grow bg-biome_dark-brightest border border-biome_border ml-4 mr-2 rounded-md">
          <input type="text"
                 onFocus={e => {
                   e.preventDefault();
                   modalContext.setShow(true);
                 }}
                 className="bg-biome_dark-brightest p-2 px-3 text-sm block w-full rounded-md" placeholder="New post" />
        </form>
      </div>

    </div>
  );
}

export default PostForm;