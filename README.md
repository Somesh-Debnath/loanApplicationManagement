# Loan Application Management

Welcome to the Loan Application Management repository! This Angular-based application is designed to streamline the process of creating, managing, and editing loan plans. The current stage of development is focused on Front-end design.

## Components

### AddLoanPlanFormComponent

Bank managers can use this component to effortlessly add new loan plans to the system. Key features include:

- **Navigation**: Accessible from the main menu.
- **Form**: Allows input of plan details, including plan type (dropdown list), tenure (range slider), and interest rate (range slider).
- **Validation**: Ensures entered data is accurate before enabling submission.
- **Submission**: Provides an acknowledgment display along with interest amount, total payable, and EMI amount upon successful submission.

### LoanPlansComponent

Designed for both customers and bank managers, this component offers the following functionality:

- **Navigation**: Easily accessible through the navbar.
- **Display**: Presents loan plan details in bootstrap cards.
- **Toggle Switch**: Radio buttons facilitate switching between customer and bank manager views.
- **Bank Manager View**: Each card features an edit button that redirects to the EditLoanPlanFormComponent, passing the plan ID as a route parameter.

### EditLoanPlanFormComponent

Bank managers can utilize this component to modify loan plan details. Noteworthy features include:

- **Navigation**: Accessible via the navbar.
- **Fetch and Display**: Retrieves and displays existing loan plan details using the provided plan ID as a route parameter.
- **Editable Fields**: Permits modifications exclusively to plan validity and plan name.
- **Validation**: Ensures modified details are valid before submission.
- **Submission**: Acknowledgment display upon successful submission.

## Integration of Frontend and Backend

The "Integration of Frontend and Backend" stage involves the following steps:

1. **Data Service**: Creation of a data service within the frontend application, responsible for communicating with micro-services.
2. **API Interaction**: Utilization of the data service in various components to facilitate interaction with the API.
3. **Error Handling**: Implementation of informative error messages based on different response status codes received from the API.

## Getting Started

To begin working with the loan application management system, follow these steps:

1. Clone this repository to your local machine.
2. Install necessary dependencies using `npm install`.
3. Run the application with `ng serve`.
4. Access the application in your browser at `http://localhost:4200`.



