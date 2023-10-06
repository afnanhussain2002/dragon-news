import PropTypes from "prop-types";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  console.log(aNews);
  const { author, title, details, thumbnail_url, rating, total_view, _id,image_url } = aNews;
  return (
    <div>
      <div className="flex justify-between bg-slate-200 p-4 items-center">
        <div className="flex gap-2">
          <div>
            <img className="w-10 rounded-full" src={author.img} alt="" />
          </div>
          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
        <BsBookmark />
          <BsShare />
        </div>
      
      </div>
      <div className="space-y-2">
         <h3 className="text-xl font-bold w-[80%]">{title}</h3>
         <img src={image_url} className="object-cover w-full " alt="" />
         {
          details.length > 200 ? <p>{details.slice(0,200)}
          <Link
          to={`news/${_id}`}
           className="text-red-400 ml-4">Read More...</Link></p> : <p>{details}</p>
         }
         <div className="flex justify-between">
            <p>{rating.number}</p>
            <p>{total_view}</p>
         </div>
      </div>
    </div>
  );
};
NewsCard.propType = {
  aNews: PropTypes.object,
};
export default NewsCard;
