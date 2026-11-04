import useProductParameters from "../hooks/useProductParameters";
import { categories } from "../../../data/categories";
import capitalize from "../../../utils/capitalize";

export default function SearchFilters(){

    const { parameters, setNewParameters } = useProductParameters();
    const { category, sort } = parameters

    return(
        <>
        <select value={category} onChange={(event) => setNewParameters({category: event.target.value})} name="category">
            <option value="all">{capitalize("all")}</option>
            {categories.map((_, index) => <option key={index} value={categories[index]}>{capitalize(categories[index])}</option>)}
        </select>
        <select onChange={event => setNewParameters({ sort: event.target.value })} value={sort} name="sort">
            <option value="without-order">Without order</option>
            <option value="asc">Ascendent</option>
            <option value="desc">Descendent</option>
        </select>
        </>
    )
}
