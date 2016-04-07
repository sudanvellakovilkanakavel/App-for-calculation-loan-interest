var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({


calInterest: function() {


alert("The form was submitted");


},



    render: function () {

    	return (
            <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center"> 
             <form name="myForm" onSubmit= {this.calInterest}>
            <h3>An React  App For Calculating Your Monthly Loan Interest </h3>
           
            
           <div class="form-group">
            <label>Choose a bank  :</label>
              <div class="col-sm-6">
            <select>
  <option value="">Canadian Imperial Bank of Commerce</option>
  <option value="">Bank of Montreal</option>
  <option value="">Laurentian Bank of Canada</option>
  <option value="">National Bank of Canada</option>
</select>
</div>
</div>
           <br />
           <div class="form-group">
            <label>Choose a Gender :</label>
              <div class="col-sm-6">
              <select>
  <option value="">Male</option>
  <option value="">Female</option>
  <option value="">Other</option>

</select>
</div>
</div>
<br />
             <div class="form-group">
            <label>Choose a loan type  :</label>
             <div class="col-sm-6">
            <select>
  <option value="">Personal</option>
  <option value="">Housiing</option>
  <option value="">Vechile</option>
  <option value="">Business</option>
</select>
</div>
</div>
           <br />

               <div class="form-group">
            <label>Enter the current age :</label> 
            <div class="col-sm-6">  
            <input type="number" class="form-control" placeholder="eg. 25" />
         </div>
         </div>
           <br />
           <div class="form-group">
            <label>Enter monthly income in $:</label> 
            <div class="col-sm-6"> 
            <input type="number" class="form-control" placeholder="eg. 30000" />
            </div>
            </div>
              <br />
         <div class="form-group">
            <label>Enter loan amount in $:</label> 
            <div class="col-sm-6"> 
            <input type="number" class="form-control" placeholder="eg. 1000000" />
            </div>
            </div>
              <br />
             <div class="form-group">
            <label>Enter  interest rate in % : </label>
             <div class="col-sm-6"> 
            <input type="text" class="form-control" placeholder="eg. 10.5" />
            </div>
            </div>
             <br />
           <div class="form-group">
            <label>Enter duration in months : </label>
            <div class="col-sm-6"> 
            <input type="number" class="form-control" placeholder="eg. 48" />
           </div>
            </div>
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


