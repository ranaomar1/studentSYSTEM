import "./FirstCompStyle.css";

function MyFirstComp(){
    const x = 20;
    const person = {
        name : "ahmed" ,
        email : "mohamed@gmail.com"
    };
    const elmStyle = {
      backgroundColor : "red",
      fontSize : "20px",
      boxShadow : "0px 20px 10px pink"
    }
  return (
    <div > <h1 style={elmStyle}>{x} mohamed </h1>
    <h2 style={{backgroundColor : "green",
      fontSize : "50px", 
      boxShadow : "0px 20px 10px purple"

    }}> hello selem {x+10}</h2>
    <h3 className={"active blueBg"}> {person.email} </h3>
    <button onClick = {SayHello}> click me </button>
    

    <h1 className={person.name == "mohamed" ? "blueBg" : "greenBg"}> check name </h1>
    </div>
    
  );
};
function SayHello (){
alert("hello");
};

export default MyFirstComp;