    describe("Test if it is a valid character", () => {
       
        test("Should return false for empty name", () => {
            const charValidator = jest.fn(()=>{
                return true
                })
                
                const attack:any = {
                    performAttack: () => { return }
                }
      
          expect(attack).toBe(false);
        });
    })