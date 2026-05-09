import "./CardStyle.css";
import "./ButtonStyle.css";
function CardComp(props) {
    
  
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.value}</p>
      {props.children}
    </div>
  );
}
export default CardComp;