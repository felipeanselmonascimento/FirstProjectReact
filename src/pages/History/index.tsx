import { HistoryCointainer, HistoryList } from "./styles";

export function History() {
    return (
        <HistoryCointainer>
            <h1> My History </h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Start</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>task</td>
                            <td>20 min</td>
                            <td>há 2 meses</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>task</td>
                            <td>20 min</td>
                            <td>há 2 meses</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>task</td>
                            <td>20 min</td>
                            <td>há 2 meses</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>task</td>
                            <td>20 min</td>
                            <td>há 2 meses</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>task</td>
                            <td>20 min</td>
                            <td>há 2 meses</td>
                            <td>Done</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryCointainer>
    )
}