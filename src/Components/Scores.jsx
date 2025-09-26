function Scores (){
    const scores = [95, 82, 74, 88, 100];
    const sum = scores.reduce((total, num) => total + num, 0);
    const average = scores.length ? (sum / scores.length).toFixed(2) : 0;

    return(
    <ul>
        {scores.map((score,index) => (<li key = {index}>{score}</li>))}
        <li>Average = {average}</li>
    </ul>
    )
}


export default Scores;