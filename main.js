const derp = document.getElementsByClassName("postMessage");
for (let o of derp){

    let text = o.innerHTML;
    const regex = new RegExp("[+-]?\\d+(?:\\.\\d+)?\\s*(lbs|lb)",'g');
    text = text.replace(regex, function(y){
        const oldY = y;
        const reg2 = new RegExp("[+-]?\\d+(?:\\.\\d+)?",'g');

        y = y.replace(reg2, function (nb) {
            nb = nb * 0.45;
            return nb;
        });
        y = y.replace(/(lbs|lb)/g,'kg');
        return '<span title="'+oldY+'" style="text-decoration: underline">'+y+'</span>';
    });

    o.innerHTML = text;
}
