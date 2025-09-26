function Colors(){
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

    return (
        <ul>
            {colors.map((color, index) => (<li key ={index}>{color}</li>))}
        </ul>
    )
}

export default Colors;