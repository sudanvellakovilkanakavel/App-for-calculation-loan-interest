var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({


calInterest: function() {


alert("The form was submitted");


},



    render: function () {

    	return (
            <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center"> 
             <form onSubmit={this.calInterest}>
            <h2>An React  App For Calculating Your Monthly Loan Interest </h2>
            <br />
            <br />
            <br />
           
            <label>Enter loan amount :</label> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            <input type="text" class="form-control" />
            <br />
            <br />
            <label>Enter  interest rate: </label>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" class="form-control" />
             <br />
             <br />
            <label>Enter duration in months: </label>&nbsp;
            <input type="text" class="form-control" />

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

              <label>Amount payable on each month is (Interest+Principal):</label>
            </form>




            </div>

           
    		)
    }


});


ReactDOM.render(

<HelloWorld  />,
document.getElementById('app')


	);


