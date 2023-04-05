import "./playButton.css";
function PlayButton({ buttonName, messege, onSmash }) {
  // Here e param in the function is the syntheticEventObject
  function handleClick(e) {
    console.log(e);
    e.stopPropagation(); // this is for stop the event bubbling.
    e.preventDefault();

    console.log({ messege });
    // {onSmash()};
  }

  return (
    // Event Handler Function
    <button onClick={handleClick}>{buttonName}</button>
  );
}

export default PlayButton;
