describe('making a new user', function () {
	it('should be able to create a new user', function () {
		browser.get('http://localhost:3001')
		element(by.model('email')).sendKeys('mickey@disney.com')
		element(by.model('forename')).sendKeys('mickey')
		element(by.model('surname')).sendKeys('mouse')
		element(by.id('submit')).click()
	})
})