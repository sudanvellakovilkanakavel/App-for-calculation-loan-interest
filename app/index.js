var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({

    render: function () {

    	return (
            <div> 
             <form>
            <h2>An Effective  App For Calculating Your Loan Interest </h2>
            <br />
            <br />
            <br />
           
            Enter loan amount : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  />
            <br />
            <br />
            Enter  interest rate: &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  />
             <br />
             <br />
            Enter duration in months: &nbsp;
            <input type="text"  />

            <br />
              <br />
              <br />

            <button
className="btn btn-block btn-success"
type="submit">
Calculate The Aount Payable on Each Month
</button>
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


