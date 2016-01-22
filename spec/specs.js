describe("pingPong", function() {
  it("will count up to a given number", function() {
    expect(pingPong(5)).to.eql([1, 2, 'ping', 4, 'pong']);
  });

  it("will replace all numbers divisible by 3 with 'ping'", function(){
    expect(pingPong(5)).to.eql([1, 2, 'ping', 4, 'pong']);
  });

  it("will replace all numbers divisible by 5 with 'pong'", function(){
    expect(pingPong(5)).to.eql([1, 2, 'ping', 4, 'pong']);
  });
});
