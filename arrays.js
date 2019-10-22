var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) 
{
  a.unshift(b)
  
}
  
function destructivelyAddElementToBeginningOfArray(a, b) 
{
  a = a.unshift(b)
  return a
}
  
