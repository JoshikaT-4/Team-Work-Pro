import React,{useState} from "react"
import { useNavigate,Link, Route } from "react-router-dom";

function Simcomint(){
    const navigate=useNavigate();
    const [prn,setprn]=useState();
    const [ir,setir]=useState();
    const [tp,settp]=useState();
    const [res,setres]=useState();
    const [error,seterror]=useState(null);
    function sicalcuater(){
      if (prn<=0 || ir<=0 || tp<=0){
        seterror("Please give in positive values")
      }
      else{
        const sic=(prn*ir*tp)/100;
        setres(sic)
        seterror(null)
      }
    }
    const [prn2,setprn2]=useState();
    const [ir2,setir2]=useState();
    const [tp2,settp2]=useState();
    const [res2,setres2]=useState();
    const [nt,setnt]=useState();
    const [error2,seterror2]=useState(null);

    function cicalcuater(){
      if (prn2<=0 || ir2<=0 || tp2<=0 || nt<=0){
        seterror2("Please give in positive values")
      }
      else{
        const sic2 = prn2 * Math.pow((1 + ir2 / 100 / nt), nt * tp2);
        setres2(sic2)
        seterror2(null)
      }
    }
  return(
    
    <div id='space' className="">
      <center>
        <h1>This is a Simple Intrestnterst Program</h1>
        <label> Principal Amount  <input  type="number" value={prn} onChange={(e)=>setprn(parseInt(e.target.value))}/></label><br/>
        <label> Intrest rate   <input type="number" value={ir} onChange={(e)=>setir(parseInt(e.target.value))}/></label><br/>
        <label> Time Period  <input type="number" value={tp} onChange={(e)=>settp(parseInt(e.target.value))}/></label><br/>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="butn2" onClick={()=>sicalcuater()}>Calucualte</button>
        <br/><br/>
        <h1>Simple Intrest={res}</h1>

        <br/>
        <h1>This is a Coumpound Intrestnterst Program</h1>
        <label> Principal Amount  <input  type="number" value={prn2} onChange={(e)=>setprn2(parseInt(e.target.value))}/></label><br/>
        <label> Intrest rate  <input type="number" value={ir2} onChange={(e)=>setir2(parseInt(e.target.value))}/></label><br/>
        <label> Time Period  <input type="number" value={tp2} onChange={(e)=>settp2(parseInt(e.target.value))}/></label><br/>
        <label>  number of times that interest is compounded per year
        <input type="number" value={nt} onChange={(e)=>setnt(parseInt(e.target.value))}/></label><br/>
        {error2 && <p style={{ color: "red" }}>{error2}</p>}
        <br/>
        <h1>Coumpound Intrestnterst = {res2}</h1>
        <button className="butn2" onClick={()=>cicalcuater()}>Calucualte</button>
        <br/>
        
        <button className="butn2" onClick={()=>navigate(-1)}>Back</button>
      </center>
    </div>
  )
}
export default Simcomint;