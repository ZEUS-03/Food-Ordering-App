import { sum } from "../components/sum";

test("check sum of two positive numbers", ()=>{
    expect(sum(2,5)).toBe(7);
})