function showCourses()
{
    document.getElementById("courses")
    .style.display = "block";

    document.getElementById("courses")
    .scrollIntoView({
        behavior:"smooth"
    });
}