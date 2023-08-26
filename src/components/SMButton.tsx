type SMButtonProps = {
    buttonValue: string;
    buttonClick: () => void;
  }
  
  const SMButton: React.FC<SMButtonProps> = (props) => {
    return <button onClick={props.buttonClick}>{props.buttonValue}</button>;
  };
  
  export default SMButton;