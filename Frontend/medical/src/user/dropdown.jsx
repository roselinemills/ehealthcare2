const Dropdown=({change,setChange})=>{
    const dropHandler=(e)=>{
        setChange(e.target.value)
    }
    return(
        <select className="form-select" aria-label="Default select example" value={change} onChange={dropHandler}>
  <option value="" selected>All</option>
  <option value="First Aid">First Aid</option>
  <option value="Oral Care">Oral Care</option>
  <option value="Baby & Child">Baby & Child</option>
  <option value="Vitamins & Minerals">Vitamins & Minerals</option>
</select>
    )
}
export default Dropdown