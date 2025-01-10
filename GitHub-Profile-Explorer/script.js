const token = "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";  
async function fetchProfileData() {
    let username=document.getElementById("githubLink").value;
    const url = `https://api.github.com/users/${username}`;  


        // Make the fetch request with the token in the headers
        const response = await fetch(url);
            const data = await response.json();
            console.log(data); 
            if(data.message==="Not Found"){
                alert("user not found");
            }
            else{
                displayProfile(data)
            }
    }
    function displayProfile(data) {
        document.getElementById("profileDetails").style.display = "block";
        document.querySelector(".cards-container").style.display="flex";
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerText = data.name || "N/A";
        document.getElementById("url").innerHTML = data.url ? `<a href="${data.html_url}" target="_blank">Click Here</a>` : "N/A";
        document.getElementById("public").innerText = data.public_repos || "N/A";
        document.getElementById("followers").innerText = data.followers || 0;
        document.getElementById("following").innerText = data.following || 0;
    }