import BudgetLogDetails from "../Components/BudgetLogDetails";

function Show(props) {
    const {deleteBudgetLog} = props;
    return (
        <div className="Show">
            <h2>Show</h2>
            <section>
                <BudgetLogDetails 
                    deleteBudgetLog = {deleteBudgetLog}
                />
            </section>
        </div>
    );
};

export default Show;