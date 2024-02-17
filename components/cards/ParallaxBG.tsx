
const ParallaxBG = ({url, children="Social App"})=>{

  return (
    <div 
    className='container-fluid'
    style={{
      backgroundImage: "url("+url+")",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      padding: "100px 0px 75px 0px",
      display: "block",
    }}
    >
        <div className='row'>
            <h1 className='display-1 text-center py-5 '> {children} </h1>
        </div>
    </div>
  );
}

export default ParallaxBG;