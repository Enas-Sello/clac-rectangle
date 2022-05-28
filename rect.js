let w = document.getElementById( 'wid' )
let h = document.getElementById('hei')
let s = document.getElementById( 'sub' )
let c = document.querySelector( '.container' )
let cont = document.getElementById('in')
s.onclick = click;

function click ()
{
    if ( w.value == "" && w.value == 0 && h.value == "" && h.value == 0 )
    {
        c.innerHTML =
        `<h1 style=" text-align: center;">  you did not enterd any width or heigt</h1>`
    }
    else
    {cont.style.display="none"
        const rect = new Object();
        rect.width = w.value;
        rect.heigth = h.value;

        rect.calcArea = function ()
        {
            return rect.width * rect.heigth
        }
        rect.primeter = function ()
        {
            return 2 * ( rect.calcArea() );
        }
        rect.info = function ()
        {
            return ` <h1>Rectangle information is</h1>
            <h2>width = ${ rect.width } CM height = ${ rect.heigth } CM</h2> 
            <pre  style="font-size:30px">area = ${ rect.calcArea() } CM 
    primeter = ${ rect.primeter() } CM </pre>`
        }
        console.log( rect.info() )
        console.log( rect.width )
        console.log( rect.heigth )
        console.log( rect.calcArea() )
        console.log( rect.primeter() )

c.innerHTML = rect.info()}
} click();


