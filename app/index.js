var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({

    render: function () {

    	return (
            <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center"> 
             <form>
            <h2>An React  App For Calculating Your Monthly Loan Interest </h2>
            <br />
            <br />
            <br />
           
            Enter loan amount : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            <input type="text"  />
            <br />
            <br />
            Enter  interest rate: &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  />
             <br />
             <br />
            Enter duration in months: &nbsp;
            <input type="text"  />

            <br />
              <br />
              <br />
              <div className="form-group col-sm-4 col-sm-offset-4">

            <button
className="btn btn-block btn-success"
type="submit">
CALCULATE
</button>
</div>
<br />
              <br />
              <br />

              Amount payable on each month is (Interest+Principal):
            </form>




            </div>

           
    		)
    }


});


ReactDOM.render(

<HelloWorld  />,
document.getElementById('app')


	);


