import { useSearchParams } from "react-router-dom";
import MovieData from "../../Movieapp";

export default function Search(){
    const [searchParams, setSearchParams] = useSearchParams();

    return <>
        <MovieData searchTerm={searchParams.get("query")} />
    </>
}