function phoneShop(input) {
    let phoneList = input.shift().split(", ");
    let inputLength = input.length;
    let phone = "";
    let index = 0;
    for (let i = 0; i < inputLength; i++) {
        let line = input[i].split(" - ");
        let command = line[0];
        switch (command) {
            case "Add":
                phone = line[1];
                if (!phoneList.includes(phone)) {
                    phoneList.push(phone);
                }
                break;
            case "Remove":
                phone = line[1];
                if (phoneList.includes(phone)) {
                    index = phoneList.indexOf(phone);
                    phoneList.splice(index, 1);
                }
                break;
            case "Bonus phone":
                let bonusPhone = line[1].split(":");
                let oldPhone = bonusPhone[0];
                let newPhone = bonusPhone[1];
                if (phoneList.includes(oldPhone)) {
                    index = phoneList.indexOf(oldPhone);
                    phoneList.splice(index + 1, 0, newPhone);
                }
                break;
            case "Last":
                phone = line[1];
                index = phoneList.indexOf(phone);
                phoneList.push(phone);
                phoneList.splice(index, 1);
                break;
            case "End":
                console.log(phoneList.join(", "));
        }
    }
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])
phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])

