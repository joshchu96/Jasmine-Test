describe('Calculate Monthly-Payment Section', () => {
  it('should calculate the monthly rate correctly', function () {
  //create a simulated object.
  let values = {
    amount: 10000,
    years:10,
    rate:1,
  };
  expect(calculateMonthlyPayment(values)).toEqual('87.60');
});

it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 1000,
    years: 7,
    rate: 5.5
  };

  expect(calculateMonthlyPayment(values)).toEqual('14.37');
});

//handle edge cases. 
  it('should handle extreme high interest rates', () => {
    let values = {
      amount: 1000,
      years: 50,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  });

  it('should handle sub-integer interest rates', () => {
    let values = {
      amount: 1000,
      years: 50,
      rate: 0.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('1.88');
  });

});

