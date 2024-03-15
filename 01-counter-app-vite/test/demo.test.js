describe('Test in sum() component', () => {
  
    // Initialization
  const sum = (a, b) => {
  
    // stimulus 
    return a + b 
  }
  
    // Watch the expected behavior... 
  test('adds a plus b equal 3', () => { 
      expect (sum(1,2)).toBe(3)
    }  
  )

})
