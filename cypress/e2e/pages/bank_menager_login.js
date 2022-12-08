

export class BankManager {


    loginBtn = ':nth-child(3) > .btn'
    addCustomerBtn = '[ng-class="btnClass1"]'
    firstName = ':nth-child(1) > .form-control'
    lastName = ':nth-child(2) > .form-control'
    postalCode = ':nth-child(3) > .form-control'
    addCustomerWithEnteredCredentials = 'form.ng-dirty > .btn'
    addCustomerBtnForRegistration = 'form.ng-dirty > .btn'
    customerBtn = '[ng-class="btnClass3"]'
    searchField = 'input[class="form-control ng-pristine ng-untouched ng-valid"]'
    name = 'tbody > .ng-scope > :nth-child(1)'
    openAccount = '[ng-class="btnClass2"]'
    user = '#userSelect'
    currency = '#currency'
    homeBtn = '.home'
    processBtn = 'form.ng-dirty > button'
    customerLoginBtn = '.borderM > :nth-child(1) > .btn'

    getSearchField() {
        return cy.get(this.searchField)
    }
    textLocatorAddCustomer() {
        return cy.get(this.addCustomerBtn)
    }
    checkName() {
        return cy.get(this.name)
    }
    checkIsItHomePage() {
        return cy.get(this.customerLoginBtn)
    }
    clickOpenAccount() {
        return cy.get(this.openAccount).click()
    }

    clickOnBankMenagerLogin() {
        cy.get(this.loginBtn).click()
    }
    clickOnAddCustomerButton() {
        cy.get(this.addCustomerBtn).click()
    }

    clickOnBtnAddCustomerCredentials() {
        cy.get(this.addCustomerBtnForRegistration).click()
    }
    clickOnCustomerBtn() {
        cy.get(this.customerBtn).click()
    }
    clickOnHomeBtn() {
        cy.get(this.homeBtn).click()
    }
    clickOnProcessBtn() {
        cy.get(this.processBtn).click()
    }

    clickOnSearchField() {
        this.getSearchField().type('Pera')
    }
    enterCustomerCredentials(name, surname, zipCode) {
        cy.get(this.firstName).type(name)
        cy.get(this.lastName).type(surname)
        cy.get(this.postalCode).type(zipCode)
    }

    selectUser(userName,valute) {
        cy.get(this.user).select(userName)
        cy.get(this.currency).select(valute)

    }
   






}