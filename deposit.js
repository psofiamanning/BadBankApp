function Deposit(){
    const [show, setShow]            = React.useState(true);
    const [status, setStatus]        = React.useState('');
    const [name, setName]            = React.useState('');
    const [email, setEmail]          = React.useState('');
    const [password, setPassword]    = React.useState('');
    const [deposit, setDeposit]      = React.useState('');
    const ctx = React.useContext(UseContext);                      //A handle on the user context

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleAddDeposit(){
        console.log(deposit);
        if (!validate(deposit,      'deposit'))        return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    }


    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
          bgcolor="primary"
          header="Deposit"
          status={status}
          body={show ? (
                  <>
                  Deposit<br/>
                  <input type="number" className="form-control" id="deposit"
                  placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
                  <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit deposit</button>
                  </>
                ):(
                  <>
                  <h5>Success</h5>
                  <button type="submit" className="btn btn-light" onClick=
                  {clearForm}>Add another account</button>
                  </>
                )}  
        />
      )
}

// function Deposit(){
//    const ctx = React.useContext(UserContext);
//    return (
//        <div>
//            <h3>Deposit
//                {JSON.stringify(ctx)}
//            </h3>
//        </div>
//    )
//}


