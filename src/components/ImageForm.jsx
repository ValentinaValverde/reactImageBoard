import { useState, Fragment } from 'react'


export function ImageForm() {
    const [imageLink, setImageLink] = useState([])
    const [value, setValue] = useState('')

    const [caption, setCaption] = useState([]);
    const [capVal, setCapVal] = useState('');


    const handleChange = (event, type) => {
        if(type === "image"){
            setValue(event.target.value)
        }

        if(type === "caption"){
            setCapVal(event.target.value)
        }
    }


    const handleSubmit = (event) => {
        console.log("Hi there!")

        event.preventDefault();
        setImageLink([...imageLink, value]);
        console.log("IMAGE ARRAY: ", imageLink)
        console.log("VALUE: ", value)

        setCaption([...caption, capVal]);
        console.log("CAPTION ARRAY: ", caption)
        console.log("CAP VAL: ", capVal);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Type in image URL:
                    <br />
                    <input type="text" placeholder='image link' onChange={(event) => { handleChange(event, "image") }}></input>
                    <br />
                    <input type="text" placeholder='caption' onChange={(event) => { handleChange(event, "caption") }}></input>

                </label>

                <br />
                <button type="submit">generate image</button>
            </form>


            <p>Your image(s) will appear below:</p>

            {imageLink.map((image, index) =>
                <Fragment key={index}><img src={image}></img><p>{caption[index]}</p></Fragment>)}
        
        </>

    )
}