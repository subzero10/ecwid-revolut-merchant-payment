# Ecwid Revolut Merchant Payment App

This is an Ecwid app that can be installed in your Ecwid apps and integrate with Revolut Merchant API.
It is build using the [Serverless](https://www.serverless.com/) framework.

### Installation & Usage

1. Create a Serverless account and follow directions to get started (i.e. `sls login`)
2. Clone this project
3. `npm install`
4. `sls deploy`
5. There will be 3 lambda functions deployed:
    - The payment URL (/order/make)
    - The merchant settings URL (/merchant-settings)
    - The merchant settings URL for the js file
    
You will have to supply the **payment URL** and **merchant settings URL** to the Ecwid Support team so that they enable the app in your account. 

