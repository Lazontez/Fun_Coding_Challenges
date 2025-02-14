export async function fetchPostTitle (){
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    try{
        const response = await fetch(url)
        if(response.status !== 200) throw new Error(`${response.ok} ${response.statusText}`)
        let jsonData = await response.json()
        if(!Array.isArray(jsonData)){ jsonData = [jsonData]}
        
        jsonData.forEach(element =>{
            if(!element.userId || !element.id || !element.title || !element.body){
                throw new Error(`Key Missing \n ${JSON.stringify({
                    userId: element.userId,
                    id: element.id,
                    title: element.title,
                    body: element.body
                  }, null, 2)}`)
            }
        })

        return(jsonData.title[0])
        
    }
    catch(error)
    {
        throw error
    }
}

// Expected usage:
fetchPostTitle()
  .then(title => console.log("Post Title:", title))
  .catch(err => console.error("Error:", err.message));
