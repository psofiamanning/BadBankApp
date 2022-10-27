function Alldata(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Alldata
                {JSON.stringify(ctx)}
            </h3>
        </div>
    )
}