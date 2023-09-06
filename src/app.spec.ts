import 'mocha';
import { expect } from 'chai';
import { Max } from './app';
describe(' Test for app.ts', () =>{
    
        const max = new Max( 30, 'constructio', 'welder');
        it("should output Max's name", ()=>{
         max.name.then((name: string)=>{
            expect(max.name).to.equal('Max');

         });
    });
    
    it("should output Maxs age", ()=>{
        
        expect(max.age).to.equal(30);
    });
    });
   

