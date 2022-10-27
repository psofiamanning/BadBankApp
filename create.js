function Create(){
    const [show, setShow]            = React.useState(true);
    const [status, setStatus]        = React.useState('');
    const [name, setName]            = React.useState('');
    const [email, setEmail]          = React.useState('');
    const [password, setPassword]    = React.useState('');
    const ctx = React.useContext(UseContext);                      //A handle on the user context

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name, email, password);
        if (!validate(name,      'name'))        return;
        if (!validate(email,     'email'))       return;
        if (!validate(password,  'password'))    return;
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
          header="Create Account"
          status={status}
          body={show ? (
                  <>
                  Name<br/>
                  <input type="input" className="form-control" id="name"
                  placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                  Email address<br/>
                  <input type="input" className="form-control" id="email"
                  placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                  Password<br/>
                  <input type="password" className="form-control" id="password"
                  placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
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
        

//2nd option of writing this component from the Examples in Module 18.
//    const ctx = React.useContext(UserContext);
//    return (
//        <div>
//            <h3>Create Account
//                {JSON.stringify(ctx)}
//            </h3>
//        </div>
//    )
// }




//The previous example from the course:
//
//    function Create(){
//        const ctx = React.useContext(UserContext);
//        ctx.users.push(Math.random().toString(36).substr(2, 5));
    
//        return (
//            <div>
//                <h3>Create Account</h3>
//                {JSON.stringify(ctx.users)}
//            </div>
//        )
//    }