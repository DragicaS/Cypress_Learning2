
export class CustomerLogin {

   customerLoginBtn = '.borderM > :nth-child(1) > .btn'
   user = '#userSelect'
   loginBtn = 'form.ng-valid > .btn'
   depositBtn = '[ng-class="btnClass2"]'
   amountFieldDeposit = '.form-control'
   depositClick = 'form.ng-dirty > .btn'
   checkLogin = '.borderM > :nth-child(1)'
   checkDepositText = '.error'
   checkBalanceText = ':nth-child(3) > :nth-child(2)'
   withdrawBtn = '[ng-class="btnClass3"]'
   amountFieldWithdraw = 'input[class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"]'
   withdrawClick= 'form.ng-dirty > .btn'
   checkWithdrawText = '.error'
   customerLogout = '.logout'
   checkLogoutName = 'label'
   
   clickOnCustomerLoginBtn() {
      return cy.get(this.customerLoginBtn).click()
   }

   selectUser(name) {
      cy.get(this.user).select(name)
   }

   clickOnLoginBtn() {
      return cy.get(this.loginBtn).click()
   }
   clickOnDepositBtn() {
      return cy.get(this.depositBtn).click()
   }
   enterDepositAmount(amount) {
      cy.get(this.amountFieldDeposit).type(amount)
   }
   clickDepositBtn() {
      return cy.get(this.depositClick).click()
   }
   checkLoginText() {
      return cy.get(this.checkLogin)
   }
   checkDepositTransaction() {
      return cy.get(this.checkDepositText)
   }
   checkBalance() {
      return cy.get(this.checkBalanceText)
   }
   clickWithdrawBtn(){
      cy.get(this.withdrawBtn).click()
   }

   enterWithdrawAmount(amount){
      cy.get(this.amountFieldWithdraw).type(amount)
   }

   clickWithdraw(){
      cy.get(this.withdrawClick).click()
   }
   checkWithdrawTransaction(){
      return cy.get(this.checkWithdrawText)
   }
   logout()
   {
      return cy.get(this.customerLogout).click()
   }
   checkLogout(){
      return cy.get(this.checkLogoutName)
   }

}