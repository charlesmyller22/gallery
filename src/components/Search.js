function Search({changeHandler, searchText}) {
    return (
        <form>
                <input 
                type="text" 
                name="search" 
                placeholder="Search..." 
                defaultValue=""
                value={searchText}
                onChange ={changeHandler}/>
        </form>
    )
}

export default Search;