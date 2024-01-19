![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/c6ca8eb6-d66a-4528-9b36-d52d98f3b1cc)Food Ordering Application
Overview
The Food Ordering Application is designed to provide users with a seamless experience in browsing a restaurant menu, selecting meals, and placing orders. The system efficiently manages orders, meals, and stock tracking to ensure a smooth and effective user experience.

Functional Presentation
Client
Meal Selection:

Users can browse the menu, view meal details, and add items to their cart.
Order Creation:

Users can create orders by selecting multiple meals and specifying preferences if needed.
Cart Management:

Users can view, adjust, and remove items from the cart before confirming the order.
Order
Meal List:

Each order consists of a list of meals selected by the user.
Total Price:

Each order displays the total price based on the selected meals.
Meal
Meal Details:

Meals have details such as name, description, price, etc.
Stocks:

The system tracks stocks for each meal to avoid ordering items that are out of stock.
Application Screenshots
![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/4eb94cdc-d062-420e-9a03-a66a97fd3c2f)
Gant : 
![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/d27fcaf2-247b-4310-b0c5-42c288994673)

Unit Testing (JUnit)
Order Services
GetAllCommandes:

Verifies that the getAllCommandes method returns the list of all existing orders with correct details.
GetCommandeById:

Verifies that the getCommandeById method retrieves a specific order by its ID with correct details.
UpdateCommande:

Verifies that the updateCommande method updates the details of an existing order and returns the updated order.
DeleteCommande:

Verifies that the deleteCommande method deletes a specific order by calling the deleteById method of the repository.
CreateCommande:

Verifies that the createCommande method creates a new order with appropriate details and returns the created order.
JUnit tests:
![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/7d94f9b1-1056-4538-ac81-c9915665808d)

Order Services Tests

Maven tests:

![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/2432370c-244d-4147-97de-95a4abc6dbb6)


Product (Snack) Services
GetAllSnacks:

Verifies that the getAllSnacks method returns the list of all existing snacks with correct details.
SaveSnack:

Verifies that the save method correctly saves a snack and returns the saved snack with appropriate details.
GetSnackById:

Verifies that the getSnackById method correctly retrieves a specific snack by its ID with appropriate details.
DeleteSnackById:

Verifies that the deleteSnackById method deletes a specific snack by calling the deleteById method of the repository with the correct ID.
JUnit tests:

Snack Services Tests
![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/c060e0cd-1e3e-461f-93f1-62f98674e723)

Selenium Tests
Scenario:

The test aims to verify the functionality of the order placement process on the platform. It involves a series of actions simulating user interaction with the site to select a dish, add it to the order, choose the quantity, and place the order.
Result:
![image](https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/9b7fcce1-0e07-4159-bebb-304e822e257c)

The test was executed successfully, and all specified steps were completed without encountering errors. The expected success message alert was confirmed.
Observations:

The website responded as expected to user interactions.
The order placement process, including navigation in product selection and interaction with buttons, worked as intended.
The alert confirming the successful placement of the order was displayed promptly.
SonarQube Code Quality
Project Configuration:

Configure your project for SonarQube.
Integration and Configuration:

Integrate SonarQube into your project and configure it.
Running Sonar Scanner:

Execute Sonar Scanner to analyze your code.
Code Quality Reports:

View and interpret the code quality reports generated by SonarQube.
Optimize and correct the source code based on repeated scans.
![Uploading image.png…]()


https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/9efadd2a-1e96-4aca-9b34-8e15cc0c059c










**
