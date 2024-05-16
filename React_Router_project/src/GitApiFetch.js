export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sonih0005')
     return response.json()
 }