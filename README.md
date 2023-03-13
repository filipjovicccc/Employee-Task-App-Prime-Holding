A setup guide: 

The Employee Task Tracker application has been built using React.
 To start the application, you can use the command "npm run start" in the command line.
 This application is designed to help users track tasks assigned to employees,
 with two CRUD (Create, Read, Update, Delete) functionalities.
 Only registered employees can log in and access their assigned tasks.

The CRUD functionalities have been implemented using localStorage, 
as advised in the assignment. Most of the functionality has been implemented in the App.js component, with the help of the StorageService component, which was created to keep the code cleaner.

To avoid errors, the code for the tasks and employee sections have been separated,
 with each section having four components. There are also additional components such as the header, which was created independently, and the Modal component, which is activated when users want to add new tasks or employees.

Routing has been implemented in the project, with two main pages - the EmployeePage 
and the TaskPage - where all other components are located. This helps to make the pages look cleaner and more organized.

To share data between components, most of the logic has been implemented using props. 
Forms have also been created to add and update data.

The application's styling has been done in the index.css file. Additionally, 
there is a Statistic component that displays two different types of statistics that are generated from the application's functionalities.

One of the application's additional functionalities is the reminder feature.
 When users double-click on a task or employee card, the card changes to blue, 
indicating that the reminder has been set for that task.

The Statistic component displays statistics for the top five employees and for
 employees under 30 years of age. The application also contains dummy initial data 
for employees and tasks, with the ability to add more data as needed.

In the Employee Task Tracker application, the Tasks and Employees components are responsible 
for looping through the main data lists.
 On the Tasks side, the main Task card is presented, while on the Employee side, 
the main Employee card is displayed.

To add new employees and tasks, separate InputSections have been implemented for both types of data. 
Validation has been performed using regular expressions to ensure that the data inputted is valid.

Overall, the application provides a clean and organized way to track employee tasks 
using a simple CRUD functionality. The addition of the reminder feature and the 
Statistic component adds extra value to the application, making it a helpful tool for
 managing employee tasks and monitoring productivity.
