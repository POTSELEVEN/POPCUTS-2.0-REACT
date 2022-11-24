

export const SingleInfo = ({info}) => {

    const {title,body}= info.info

    return(

    <div className="container single-info">

        <h1 className="title title-video">{title}</h1>
        <p className="info-text">{body.map((line)=> <>{line}<br/></>)}</p>


    </div>

    )

}