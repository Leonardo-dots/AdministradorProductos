import SearchInput from "./SearchInput"
import SearchFilters from "./SearchFilters"

export default function ProductNavFilter(){
    return(
        <div className="filter-navbar">
            <SearchInput/>
            <SearchFilters/>
        </div>
    )
}
