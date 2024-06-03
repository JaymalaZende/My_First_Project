import React from 'react';

function ProfitLossTable() {
    // Sample data for profit and loss
    const profitLossData = [
        { month: 'January', revenue: 5000, expenses: 3000 },
        { month: 'February', revenue: 6000, expenses: 3500 },
        { month: 'March', revenue: 5500, expenses: 4000 },
        // Add more months as needed
    ];

    return (
        <div>
            <h2>Profit and Loss Statement</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Revenue</th>
                        <th>Expenses</th>
                        <th>Profit/Loss</th>
                    </tr>
                </thead>
                <tbody>
                    {profitLossData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.month}</td>
                            <td>${entry.revenue}</td>
                            <td>${entry.expenses}</td>
                            <td>${entry.revenue - entry.expenses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProfitLossTable;
