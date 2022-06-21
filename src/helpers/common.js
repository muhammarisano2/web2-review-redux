export const getDay=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const date = new Date().getDay()
            resolve(date)
        }, 1000)
    })
    
    

}