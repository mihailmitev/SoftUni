function fancy(input) {
  
        let count = Number(input.shift());
        let pattern = /[@][#]{1,}(?<barcode>[A-Z][A-Za-z0-9]{4,})[@][#]{1,}/;
        for(const line of input) {
            let code = '';
            let match = pattern.exec(line);
            if(match) {
                for(const element of match.groups.barcode) {
                    if(element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
                        code += element;
                    }
                }
                if(code == '') {
                    console.log(`Product group: 00`);
                } else {
                    console.log(`Product group: ${code}`);
                }
            } else {
                console.log(`Invalid barcode`);
            }
        }
    
}
fancy((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)