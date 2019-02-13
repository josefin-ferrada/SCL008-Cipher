describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');


  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it("debería retornar 'false' si es que falta alguno de los parámetros", () => {
      assert.equal(cipher.encode(5,""),false);
    });
    it("debería retornar 'false' si es que falta alguno de los parámetros", () => {
      assert.equal(cipher.encode("","hola"),false);
    });

    it("debería recibir como parámetro en offset solo números", () =>{
      assert.equal(cipher.encode("asd","hola"),false);
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "-*.;<klmKLM" para "# $12abcABC" con offset 10', ()=>{
      assert.equal(cipher.encode(10,"# $12abcABC"), "-*.;<klmKLM")
    });

  });


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it("debería retornar 'Ingrese todos los campos' si es que falta alguno de los parámetros", () => {
      assert.equal(cipher.decode(5,""), false);
    });

    it("debería retornar 'false' si es que falta alguno de los parámetros", () => {
      assert.equal(cipher.decode("","hola"),false);
    });

    it("debería recibir como parámetro en offset solo números", () =>{
      assert.equal(cipher.decode("asd","hola"), false);
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{

      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "# $12abcABC" para "-*.;<klmKLM" con offset 10', ()=>{

      assert.equal(cipher.decode(10,"-*.;<klmKLM"), "# $12abcABC")
    });
  });



});
