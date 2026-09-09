import { describe, it } from "vitest";
import { expect } from "vitest";
import formatDate from './formatDate'

describe('formatDate',()=>{
    it("should format a valid date",()=>{
        const date=new Date("2026-01-15");
        expect(formatDate(date)).toBe(date.toLocaleDateString())
    })
    it("empty argument",()=>{
        const invalidDate=new Date("abc")
        expect(formatDate(invalidDate)).toBe("Invalid Date");
    })
})