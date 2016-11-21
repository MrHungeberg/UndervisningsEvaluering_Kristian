$(document).ready(function () {

    var $studentTableBody = $("#studentTableBody")

    $.ajax({
        url: "http://localhost:5000/api/course/userId",
        method: "GET",
            /* headers: {
            filter: JSON.stringify({"include":["authors", "publisher"]}),
        },*/
        dataType: "json",
        contentType: "application/json",
        success: function(course, status, xhr){


            course.forEach(function (course){

                $studentTableBody.append(
                    "<tr>" +
                    "<td>" + course.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ + "</td>" +
                    "<td>" + /*button*/ + "</td>" +
                    "</tr>"
                );

            });

        },
        error: function(xhr, status, error){
            console.log(xhr, status,error);
        },

    });

});