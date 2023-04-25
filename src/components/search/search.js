import './search.css'

function Search({ searchR, setSearchR }) {
    return (
        <>

        <div >
            <input value={searchR} onChange={(e) => setSearchR(e.target.value)} id="exampleFormControlInput2" type="email" placeholder="What're you searching for?" className="form-control form-control-underlined border-primary">
                </input>
          </div>
        </>
    );
  }
  
  export default Search;
  