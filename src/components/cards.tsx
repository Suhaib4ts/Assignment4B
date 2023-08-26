type CardProps = {
    id: number;
    name: string;
    age: number;
    institute: string;
  }
  
  const Cards: React.FC<CardProps> = (props) => {
    return (
      <div className="card">
        <center>
          <p>ID: {props.id}</p>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Institute: {props.institute}</p>
        </center>
      </div>
    );
  };
  
  export default Cards;