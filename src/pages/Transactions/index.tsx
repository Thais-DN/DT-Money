import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
    PriceHighLitgh,
    TransactionsContainer,
    TransactionsTable,
} from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLitgh variant="income">
                                    R$ 12.000.00
                                </PriceHighLitgh>
                            </td>
                            <td>Vendas</td>
                            <td>25/02/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighLitgh variant="outcome">
                                    - R$ 59,00
                                </PriceHighLitgh>
                            </td>
                            <td>Alimentação</td>
                            <td>26/02/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
