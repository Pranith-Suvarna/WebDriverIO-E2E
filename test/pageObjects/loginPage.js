class LoginPage
{

    get username()
    {
       return $("input[name='username']")
    }

    get password()
    {
       return $("//input[@type='password']")
    }

    get signIn()
    {
        return $("#signInBtn")
    }

    Login(username,password)               //reusable method
    {
        this.username.setValue(username)
        this.password.setValue(password)
        this.signIn.click()
    }

}
module.exports = new LoginPage()
