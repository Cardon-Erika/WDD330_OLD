function showAllWeeks() {

    const links = [
        { label: "Week One", url: "weekOne/index.html", description: "This week we learned primarily about how to master the user experience for mobile devices and set up our portfolio."},
        { label: "Week Two", url: "weekTwo/index.html", description: "This week we learned about programming basics, arrays, logic, and loops, and functions. We started working on our Super Hero quiz, with simple arrays and alerts. We also worked on a group project with some simple input fields that add, subtract, multiply, and divide." },
        { label: "Week Three", url: "weekThree/index.html", description: "This week we learned about objects, the document object model, and events. We continued working on our Super Hero quiz, making it a little more complex with displayed scoring and a start button. In our group project we worked on filtering information from arrays and printing it to the console.log."},
        { label: "Week Four", url: "weekFour/index.html", description: "This week we learned about forms, object oriented programming, and modern javascript with libraries and modules. We continued to improve our Super Hero quiz, adding in more questions asked randomly, with a list of three options to choose from for the answer. The quiz also updates the score in real time on screen. In the group project, we worked on creating a tic-tac-toe game that alternates between players."}
    ];

    if (links != null) {
        // var allWeeks = JSON.parse(links)
        var weeksDisplayer = document.getElementById("all_weeks_display")
        weeksDisplayer.innerHTML = null
        var numberOfWeeks = links.length
        for (var i = 0; i < numberOfWeeks; i++) {
            var aWeek = links[i]
            // weeksDisplayer.innerHTML += "<a href=" + aWeek["url"] + ">" + aWeek["label"] + "</a><br>"
            weeksDisplayer.innerHTML += "<div class='weekEntry grow'><a href=" + aWeek["url"] + ">" + "<h1>" + aWeek["label"] + "</h1><p>" + aWeek["description"] + "</p>" + "</a></div><br>"
        }
    }
}