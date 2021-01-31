function showAllWeeks() {

    const links = [
        { label: "Week 1", url: "weekOne/index.html" },
        { label: "Week 2", url: "weekTwo/index.html" },
        { label: "Week 3", url: "weekThree/index.html" },
        { label: "Week 4", url: "weekFour/index.html" }
    ];

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