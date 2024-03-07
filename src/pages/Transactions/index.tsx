import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
    PriceHighLitgh,
    TransactionsContainer,
    TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (contex) => {
        return contex.transactions;
    });
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">
                                        {transaction.description}
                                    </td>
                                    <td>
                                        <PriceHighLitgh
                                            variant={transaction.type}
                                        >
                                            {transaction.type == "outcome" &&
                                                "-"}
                                            {priceFormatter.format(
                                                transaction.price
                                            )}
                                        </PriceHighLitgh>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        {dateFormatter.format(
                                            new Date(transaction.createdAt)
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
