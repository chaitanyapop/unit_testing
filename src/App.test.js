import {render, screen} from '@testing-library/react'
import Sum from './Function/TestSetup'

test("Check the sum of two numbers",()=>{
  let a=20
  let b=30
  let output=50
  expect(Sum(a,b)).toBe(output)
})