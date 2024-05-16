import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
    // const [gitData, setGitData] = useState("")
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/sonih0005')
    //     .then((res) => res.json())
    //     .then((data) => setGitData(data))
    // }, [])
    // console.log(gitData)
    const gitData = useLoaderData()

  return (
    <>
     <div className="flex items-center justify-evenly">
        <div className="img">
         <img src={gitData.avatar_url} alt="" />
        </div>
        <div className="github-info">
            <h1>Name:{gitData.name} </h1>
            <h1>Bio:{gitData.bio} </h1>
            <h1>Followers:{gitData.followers} </h1>
            <h1>Location:{gitData.location} </h1>
        </div>
     </div>
    </>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//    const response = await fetch('https://api.github.com/users/sonih0005')
//     return response.json()
// }