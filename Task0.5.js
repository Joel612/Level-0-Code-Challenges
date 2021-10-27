  let side1 = 3;
  let side2 = 4;
  let side3 = 5;
  
function findArea( side1,  side2,  side3)
{
    let perimeter = (side1 + side2 + side3) / 2;
    return Math.sqrt(perimeter * (perimeter - side1) *
                    (perimeter - side2) * (perimeter - side3));
}
