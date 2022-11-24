

export const SingleInfo = ({info}) => {

    

    return(

    <div className="container single-info">

        <h1 className="title title-video">{info.name}</h1>
        <p className="info-text">{info.recipe}</p>


    </div>

    )

}