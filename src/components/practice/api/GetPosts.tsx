import { useEffect, useState } from "react";


type Post = {
    userId: number;
    id:number;
    title: string;
    body: string
}


function GetPosts(){

    const [posts,setPosts] = useState<Post[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string|null>(null);

    

    async function fetchPosts() {
        try {

            setLoading(true)
            setError(null)

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!response.ok) {
                throw new Error("Faild to fetch posts",{cause:"resposne ok is false"})
            }

            const data: Post[] = await response.json();

            setPosts(data)
            
        } catch (error) {
            
            if (error instanceof Error && error.name === "AbortError") {
                return ;
            }

            if (error instanceof Error && error.cause === "resposne ok is false") {
               console.log("cause data");
               
            }

            setError("unable to load posts.")
            
        } finally {
            setLoading(false)
        }
    }


    useEffect(()=>{
        void fetchPosts()
    },[])

    if (loading) {
        return <p className="container mt-4">Loading posts ..... </p>
    }

    if (error) {
        return <p className="container text-danger mt-4">{error}</p>
    }


    return <>
    
    <div className="container mt-4">

        <h2>Posts</h2>

        <div className="row g-3 align-items-stretch">
            {posts.map((post:Post) => <div  key={post.id} className="col-md-4">
                <div className="card" style={ {minHeight:"100%",} }>

                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>

                </div>
            </div>)}
        </div>

    </div>

    </>

}


export default GetPosts;