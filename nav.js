function Nav(){
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/Home/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/Create/">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Withdraw/">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Alldata/">All Data</a>
              </li>
            </ul>
          </div>
        </nav>

            </>
        );
    }
