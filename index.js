function Spa(){
    return (
        <HashRouter>
            <Nav/>
            <UserContext.Provider value={{users:[{name:'sofia',email:'sofia@mit.com',password:'secretpassword',balance:'1000'}]}}>
                <Route path="/" exact      component={Home}         />
                <Route path="/create/"     component={Create}       />
                <Route path="/deposit/"    component={Deposit}      />
                <Route path="/withdraw/"   component={Withdraw}     />
                <Route path="/alldata/"    component={AllData}      />
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)
