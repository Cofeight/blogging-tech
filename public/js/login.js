//document.querySelector("form#login").addEventListener("submit",(e)=>{
//    e.preventDefault();
//    const fetchObj = {
//        email: document.querySelector("#login-email").value,
//        password: document.querySelector("#login-password").value,
//    }
//    fetch("/api/users/login/",{
//        method:"POST",
//        body:JSON.stringify(fetchObj),
//        headers:{
//            "Content-Type":"application/json"
//        }
//    })
//    .then(res=>{
//        if(!res.ok){
//            return alert("Sad trombone!")
//        } else {
//            res.json()
//            .then(data=>{
//                location.href = `/profile/${data.id}`
//            })
//        }
//    })
//})//

//document.querySelector("form#signup").addEventListener("submit",(e)=>{
//    e.preventDefault();
//    const fetchObj = {
//        email: document.querySelector("#signup-email").value,
//        password: document.querySelector("#signup-password").value,
//    }
//    fetch("/api/users",{
//        method:"POST",
//        body:JSON.stringify(fetchObj),
//        headers:{
//            "Content-Type":"application/json"
//        }
//    })
//    .then(res=>{
//        if(!res.ok){
//            return alert("Sad Trombone!")
//        } else {
//            res.json().then(data=>{
//                location.href = `/profile/${data.id}`
//            })
//        }
//    })
//})