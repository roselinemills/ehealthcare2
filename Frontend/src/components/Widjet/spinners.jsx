function Spinner() {
    return ( <>
    <div className="spinner-border m-5" style={{fontSize:'2em',width:'5em',height:'5em'}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    </> );
}

export default Spinner;