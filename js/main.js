function showAllWeeks() {

    // const links = [{
    //     label: "Week1 Notes",
    //     url: "weekOne/index.html"
    // }
    //     {
    //     label: "Week2 Notes",
    //     url: "weekTwo/index.html"
    // }]

    // const links = [
    //     [label: "Week1 Notes", url: "weekOne/index.html"],
    //     [label: "Week2 Notes", url: "weekTwo/index.html"]
    // ];

    const links = [{
            label: "Week1 Notes",
            url: "weekOne/index.html"
        },
        {
            label: "Week2 Notes",
            url: "weekTwo/index.html"
        }]

    if (links != null) {
        // var allWeeks = JSON.parse(links)
        var weeksDisplayer = document.getElementById("all_weeks_display")
        weeksDisplayer.innerHTML = null
        var numberOfWeeks = links.length
        for (var i = 0; i < numberOfWeeks; i++) {
            var aWeek = links[i]
            weeksDisplayer.innerHTML += "<a href=" + aWeek["url"] + ">" + aWeek["label"] + "</a><br>"
        }
    }
}