const Card = ({tipo,imagem,titulo, categoria, paragrafo}) => {
    return ( 
        <div style={{border: "1px solid black"}}>
            <img src={imagem} alt="" />
            <h2>{titulo}</h2>
            {
                tipo == "A" && (
                    <>
                        <h6>{categoria}</h6>
                        <p>{paragrafo}</p>
                    </>
                )
            }
            
        </div>
     );
}
 
export default Card;