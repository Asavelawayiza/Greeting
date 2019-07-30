describe('greeting test' , function(){
    it('should greet Asavela in English' , function(){
        var instance = greeting();
        assert.deepEqual(instance.language('Asavela', 'English'), "Hello, Asavela!");

    })

    it('should greet Asavela in isiXhosa' , function(){
        var instance = greeting();
        assert.deepEqual(instance.language('Asavela', 'Xhosa'), "Molo, Asavela!");

    })
    
    it('should greet Asavela in Afrikaans' , function(){
        var instance = greeting();
        assert.deepEqual(instance.language('Asavela', 'Afrikaans'), "Hallo, Asavela!");

    })

    it('should return error message if no name is entered' , function(){
        var instance = greeting();
        assert.deepEqual(instance.language('', 'English'), "please enter a name!");

    })
    it("it should give error message if there's no language selected", function () {
        var instance = greeting();
        assert.equal(instance.language('Asavela', ''), "please select language");

    });
    it("it should give error message if you enter numbers", function () {
        var instance = greeting();
        assert.equal(instance.language('59624', 'Afrikaans'), "Does not take in numbers");

    });
    it('it should greet the name entered and count it once', function () {
        var instance = greeting();
         instance.keepName("Asavela")
         instance.keepName("Asavela")
        assert.deepEqual({name: "Asavela"}, instance.getName());

    })
    it('it should increment the counter when a different name is entered', function() {
        var instance = greeting();
            instance.keepName({name:'asa'});
            assert.equal(1, instance.counter());
    })
    
    it()

});






