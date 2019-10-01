// Timetabling System application control logic
// Neeraj Chatlani and D.S. Myers, 2016


// Creates new course sections
//
// Called when:
//   the Save button in the create course modal dialog is pressed.
//
// Effects:
//   Reads the appropriate fields from the modal dialog
//   Creates new list entries for each section (lecture and lab)
//   Inserts those list entries into the course listing
//   Sends information on the new sections to the server, which adds
//     entries for them to its data store
//   
// Inputs:
//   None
//
// Returns:
//   Nothing
function createCourseSections() {
  var coursePrefix = $("dialog_course_prefix").val();
  var courseNumber = $("dialog_course_number").val();
  var numLectures = $("dialog_num_lectures").val();
  
  // Get a reference to the list of courses
  var sectionList = $("#list_of_created_courses");
    
  // Create <li> items for the lecture sections
  for (var i = 0; i < numLectures; i++) {
    var newListNode = document.createElement("li");
    
    var sectionName = coursePrefix + " " + courseNumber + " - Lecture " + (i + 1);
    var newTextNode = document.createElement(sectionName)
    
    console.log(newTextNode);
    newListNode.appendChild(newTextNode);
    console.log(newListNode);
    
    sectionList.appendChild(newListNode);
  }
}