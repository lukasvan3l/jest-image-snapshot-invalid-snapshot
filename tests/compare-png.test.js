describe('compare', () => {
  it('should snapshot my png', () => {
    expect('huis-aan-huis-1-2.png').toMatchImageSnapshot();
  })
})
