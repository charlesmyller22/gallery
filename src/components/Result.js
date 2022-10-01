import Image from './image';
import ImageFooter from './ImageFooter';
function Result({ text }) {
    return (
        <>
            <li>
                <Image></Image>
                <ImageFooter text={text}></ImageFooter>
            </li>
        </>
    )
}

export default Result;