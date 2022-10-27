function Home(){
    return (
        <Card
            bgcolor="primary"
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to Sofia's Bank"
            text="You can use this bank"
            body={(<img src="Bank.jpg" className="img-fluid" alt="Responsiv image"/>)}
         />
    );
}

