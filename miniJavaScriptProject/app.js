document.getElementById("btnPick").addEventListener("click", pickAWinner);//add click listner

function pickAWinner() {// pickWinner method if gender not selected show error alert message else show alert according  data found or not.
    let selectGender = document.getElementById("cboGender");
    if (selectGender.value == "") {
        alert("Please select a gender");
    } else {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
        let gender;
        if (selectGender.value == "M") {
            gender = "male";
        } else if (selectGender.value == "F") {
            gender = "female";
        } else {
            gender = "non-binary";
        }
        fetchData("../data/data.json").then(jsonData => {
            let flag = 0;
            jsonData.forEach(student => {
                // check if student matched or not
                if (student.id == randomNumber && student.gender == selectGender.value) {
                    let first="";
                    let middle="";
                    let last="";
                    if(student.first!=null){
                        first=student.first;
                    }
                    if(student.middle!=null){
                        middle=student.middle;
                    }
                    if(student.last!=null){
                        last=student.last;
                    }
                    alert("#" + randomNumber + ": " + first + " " + middle+ " " + last + " is the winner.");
                    flag = 1;
                    return false;
                }
            });
            if (flag == 0) {
                alert("Could not find a " + gender + " customer matching ID #" + randomNumber);

            }
        }).catch(error => {
            console.log("something went wrong :", error)
        })
    }
}
async function fetchData(req) {
    // fetch json data
    let resp = await fetch(req);
    if (resp.ok == true) {
        return await resp.json();
    }
    throw new Error(resp.status);

}
