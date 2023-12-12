const PostImage = (props) => {
    const { src, alt, className } = props;
    console.log(props);
    return (
        <div style={{
            backgroundImage: `url(${p.image&&p.image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            height: "300px",
        }}>

        </div>
    )
    
}

export default PostImage;