
const derp = document.getElementsByClassName("postMessage");
for (let o of derp){

    let text = o.innerHTML;
    const regex = new RegExp("[+-]?\\d+(?:\\.\\d+)?\\s*(lbs|lb)",'g');
    const feet = new RegExp("\\d+(\\'|\\’)(\\s?(\\d+\x22?))?");

    text = text.replace(regex, function(y){
        const oldY = y;
        const reg2 = new RegExp("[+-]?\\d+(?:\\.\\d+)?",'g');

        y = y.replace(reg2, function (nb) {
            nb = nb * 0.45;
            return Math.round(nb);
        });
        y = y.replace(/(lbs|lb)/g,'kg');
        return '<span title="'+oldY+'" style="text-decoration: underline">'+y+'</span>';
    });

    text = text.replace(feet,function (ft) {

        let
        a = ft.replace( /(\x22)/g, ''),
        b = a.replace( /('|’)/g, '* 12 +'),
        c = eval(b);
        c *= 2.54;

        return '<span title="'+ft+'" style="text-decoration: underline">'+Math.round(c)+'cm'+'</span>';
    });

    o.innerHTML = text;
}
