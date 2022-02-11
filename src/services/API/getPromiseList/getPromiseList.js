export const getPromiseList = (dataList) =>{
    return new Promise ((res, rej)=>{
      setTimeout(()=>{
        return res(dataList)
      }, 2000)
    })
  }

