const Enum = artifacts.require("./Enum")
require("chai")
    .use(require("chai-as-promised"))
    .should()


contract("Enum", ()=>{

    let enumContract

    beforeEach( async()=>{
        enumContract = await Enum.new()
    })

    describe("successful deployment", ()=>{
        it("has deployment address", async()=>{
            const address = enumContract.address

            address.should.be.not.equal('', "has a contract address")
        })

        it("has a value assigned to variable name", async()=>{
            const name = await enumContract.name()
            name.should.be.equal("Dupe", "name variable's value is correct")
        })

        it("gets the values from the get function", async()=>{
            const values = await enumContract.get()
            
            const name = values['0']
            const status = values['1'].toString()

            name.should.be.equal("Dupe", "returns the name")
            status.should.be.equal("0", "returns the index value for undefined")
       
        })

        it("resets the enum status value using string", async()=>{
            await enumContract.setUsingString("pending")

            const values = await enumContract.get()
            const status= values['1'].toString()
            status.should.be.equal("1", "it resets the enum status value to pending")
        })

        it("resets the enum value using int", async()=>{
            await enumContract.setWithUint(3)

            const values = await enumContract.get()
            const status= values['1'].toString()
            status.should.be.equal("3", "it resets the enum status value to started")
        })
    })

    
    


})