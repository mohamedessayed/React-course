type CourseProps = {
    title:string,
    description:string,
}

function CourseCard({title, description}:CourseProps){

    return <div className="card p-2">

        <h2>{title}</h2>
        <p>{description}</p>

    </div>

}


export default CourseCard