function Withdraw(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Withdraw
                {JSON.stringify(ctx)}
            </h3>
        </div>
    )
}