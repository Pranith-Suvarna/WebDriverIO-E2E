class SuccessfulPage
{

    get proceed()
    {
        return $(".btn-success")
    }

    get countryField()
    {
        return $("#country")
    }

    enterCountry(country)                   //reusable method
    {
        this.countryField.setValue(country)
    }

    get loading()
    {
        return $(".lds-ellipsis")
    }

    get selectCountry()
    {
        return $("=India")
    }

    get submit()
    {
        return $("[type='submit']")
    }

    get success()
    {
        return $(".alert-success")
    }

}

module.exports = new SuccessfulPage()
