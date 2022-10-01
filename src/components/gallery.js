import Result from "./Result";

function Gallery({ results }) {
    return (
        <div className="gallery">
        <ul>
            {results.map((text, i) => (
                <Result key={i} text={text}></Result>
            ))}
        </ul>
        </div>
        
    )
}

export default Gallery;