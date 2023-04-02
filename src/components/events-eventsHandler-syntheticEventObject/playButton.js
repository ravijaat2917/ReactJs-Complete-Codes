import './playButton.css';
function PlayButton({buttonName , messege , onSmash}) {

    function handleClick () {
        console.log({messege});
        // {onSmash()};
    }

    return(
        // Event Handler Function
        <button onClick={handleClick} >{buttonName}</button>
    )
}

export default PlayButton ;