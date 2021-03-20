it('should calculate the monthly rate correctly', function() {
	expect(
		calculateMonthlyPayment({
			amount: 5000,
			years: 2,
			rate: 5
		})
	).toEqual('219.36');
	expect(
		calculateMonthlyPayment({
			amount: 10000,
			years: 2,
			rate: 2
		})
	).toEqual('425.40');
	expect(
		calculateMonthlyPayment({
			amount: 500000,
			years: 30,
			rate: 3
		})
	).toEqual('2108.02');
});

it('should return a result with 2 decimal places', function() {
	expect(
		calculateMonthlyPayment({
			amount: 5000,
			years: 2,
			rate: 5
		})
	).toBeCloseTo('219.36', 2);
	expect(
		calculateMonthlyPayment({
			amount: 10000,
			years: 2,
			rate: 2
		})
	).toBeCloseTo('425.40', 2);
	expect(
		calculateMonthlyPayment({
			amount: 500000,
			years: 30,
			rate: 3
		})
	).toBeCloseTo('2108.02', 2);
});

// toBeCloseTo(expected, precision)
// expected: the expected value to compare against
// precision: default:2; the number of decimal points to check.
