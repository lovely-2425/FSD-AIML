
import pic from '../image/lovely1.jpeg'
function ICard({data}){
    return(
        <div style={{border:'10px solid red',height:'350px',width:'250px',marginLeft:'200px'}}>
            {/* <img src ={pic} height="200px" width= "120px"/> */}
            <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
            <img src ={data.pic} height = {200} width={200}></img>
            <h2 style={{color:'red'}}>Welcome to React</h2>
            <h3>Roll:{props.roll}</h3>
            <h3>Name:{props.name}</h3>
            <h3>Branch:{props.branch}</h3>
        </div>
    )
}
export default ICard