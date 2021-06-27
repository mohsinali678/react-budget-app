import BudgetLogNewForm from "../Components/BudgetLogNewForm"

export default function New(props) {
    const {addBudgetLog} = props
    return (
        <div className="New">
            <h2>Enter a New Budget</h2>
            <BudgetLogNewForm addBudgetLog={addBudgetLog} />
        </div>
    )
}

