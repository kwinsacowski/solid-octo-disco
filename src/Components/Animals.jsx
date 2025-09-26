function Animals (){
    const animals = ["Dog", "Cat", "Rabbit", "Parrot", "Hamster"];

    return (
        <ul>
        {animals.map((animal, index) => (<li key ={index}>{animal}</li>))}
        </ul>
    )
}

export default Animals;