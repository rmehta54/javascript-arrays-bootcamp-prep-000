var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) 
{
  var c = a.unshift(b)
  return c
}
  
function destructivelyAddElementToBeginningOfArray(a, b) 
{
  a = a.unshift(b)
  return a
}
  
