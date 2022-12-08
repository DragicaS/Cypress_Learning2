/// <reference types = "Cypress" />



import { BankManager } from "./pages/bank_menager_login"
import { CustomerLogin } from "./pages/customer_login"


const bankPage = new BankManager()
var customer = new CustomerLogin()


describe('Admin tests', () => {


    it('Add New Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        bankPage.clickOnBankMenagerLogin()
        
        //Checking that page for adding customer is opened
        bankPage.textLocatorAddCustomer().should('have.text', 'Add Customer\n\t\t')
        bankPage.clickOnAddCustomerButton()
        bankPage.enterCustomerCredentials('Pera', 'Peric', '21000')
        bankPage.clickOnBtnAddCustomerCredentials()
        //Ckecking that acount is added
        bankPage.clickOnCustomerBtn()
        bankPage.clickOnSearchField()
        bankPage.checkName().should('have.text', 'Pera')

    })

    it('Open Account', () => {

        bankPage.clickOpenAccount()
        
        bankPage.selectUser('Pera Peric','Dollar')
        bankPage.clickOnProcessBtn()
        bankPage.clickOnHomeBtn()
        //Checking Home
        bankPage.checkIsItHomePage().should('have.text', 'Customer Login')
    })

    it('Customer Login',() =>{
        customer.clickOnCustomerLoginBtn()
        customer.selectUser('Pera Peric')
        customer.clickOnLoginBtn()
        //Checking Login
        customer.checkLoginText().should('include.text','Welcome')
    })

    it('Create Deposit',() =>{

        customer.clickOnDepositBtn()
        customer.enterDepositAmount(500)
        customer.clickDepositBtn()
        //Check is Deposit entered succesfully
        customer.checkDepositTransaction().should('have.text','Deposit Successful')
        customer.checkBalance().should('have.text','500Deposit')
    })

    it('Withdraw The Amount',() =>{
        customer.clickWithdrawBtn()
        customer.enterWithdrawAmount(200)
        customer.clickWithdraw()
        //Check Transaction
        customer.checkWithdrawTransaction().should('have.text','Transaction successful')
        customer.checkBalance().should('have.text','300Withdraw')
        customer.logout()
        customer.checkLogout().should('have.text','Your Name :')

    })
   
    
})