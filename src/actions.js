import axios from'axios';

export var postDocCallAPI= async (data)=>{
    try{
  await axios.post("http://localhost:9000/doctors",data)
    return ("Successfully created");
    }catch(err){
     return("failed to create")
    }
}
export var postPatCallAPI= async (data)=>{
    try{
    await axios.post("http://localhost:9000/patients",data);
    return ("Successfully Created");
    }catch(err){
     return("failed to create")
    }
}

export var getDocCallAPI= async ()=>{
    try{
    let res=await axios.get("http://localhost:9000/doctors");
    return res;
    }catch(err){
     return(err)
    }
}

export var getPatCallAPI= async (data)=>{
    try{
    let res=await axios.get("http://localhost:9000/patients");
    return res;
    }catch(err){
     return("failed")
    }
}
// exports.actions= {postDocCallAPI,postPatCallAPI,getDocCallAPI,getPatCallAPI};