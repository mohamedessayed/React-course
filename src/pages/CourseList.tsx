import { useState } from "react"
import CourseCard from "../components/CourseCard";


type courseData = {
    id:number,
    title:string,
    description:string,
}

function CourseList() {

    const[result,setResult] = useState<courseData[]>()

    const[list] = useState<courseData[]>([
        {
        id:1,
        title:"course one",
        description:"lorem apsum 1"
        },
        {
        id:2,
        title:"course two",
        description:"lorem apsum 1"
        },
        {
        id:3,
        title:"course three",
        description:"lorem apsum 1"
        },
        {
        id:4,
        title:"course four",
        description:"lorem apsum 1"
        },
]);


const keyUpHandel = (e:any)=>{
    const searchValue = e.target.value;
    const searchResult = list.filter((course)=>course.title.includes(searchValue))
    setResult(searchResult)
    
}


return <div className="container py-5">

    <div className="mb-3">
        <input onChange={(e: any)=>keyUpHandel(e)} type="search" className="form-control" placeholder="search courses....." />
    </div>

{result ? result.map((course)=> <CourseCard key={course.id} title={course.title} description={course.description}/>) : list.map((course)=> <CourseCard key={course.id} title={course.title} description={course.description}/>)}


</div>
    
}


export default CourseList