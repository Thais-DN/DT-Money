import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <div>
            <SearchFormContainer>
                <input type="text" placeholder="Busque por transarções" />

                <button type="submit">
                    <MagnifyingGlass size={20} />
                    Buscar
                </button>
            </SearchFormContainer>
        </div>
    );
}
