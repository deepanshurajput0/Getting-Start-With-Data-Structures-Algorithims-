/// async callbacks 

function fetchData(callback){
    const data = [
        {
            name:'deepanshu',
            age:21
        },{
            name:'chirag',
            age:21
        },{
            name:'abhay',
            age:21
        }
    ]
    setTimeout(()=>{
       if(data.length===0){
         callback(new Error('No data found internal server error'),null)
       }else{
        callback(null,data)
       }
    },1000)
}


fetchData((err,result)=>{
    if(err){
      console.log(err)
    }else{
        console.log(result.length)
    }
})



