import { useParams } from "react-router-dom";
// import { mealData } from "../data";

function ViewItem() {
  const { id } = useParams();
  return <div>viewItem :{id}</div>;
}

export default ViewItem;
