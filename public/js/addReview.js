document.querySelector("#add-review-form").addEventListener("submit", evt => {
    evt.preventDefault();
    const fetchObj = {
        GoproId:document.querySelector("#rating-id").value,
        rating:document.querySelector("#rating").value,
        review:document.querySelector("#review-post-area").value,  
    }
    console.log(fetchObj);
    fetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(fetchObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res=> {
        if(res.ok) {
            location.href = "/"
        }else {
           alert("oh no!")
        }
    })
})