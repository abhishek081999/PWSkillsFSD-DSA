function publishArticle(){
    alert("called")
    let title= document.getElementById("artTitle").value;
    let imgUrl= document.getElementById("imgurl").value;
    let author= document.getElementById("author").value;
    let cat= document.getElementById("cat").value;
    let story= document.getElementById("story").value;

    document.getElementById("image").src=imgUrl;
    document.getElementById("title").textContent=title;
    document.getElementById("writer").textContent=author;
    document.getElementById("story-item").textContent=story;
    
}