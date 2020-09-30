### This repo contains all of my projects that are built on top of the .NET Core 3.1, Angular, and PostgreSQL stack. The three current projects within this repo are: 1. Portfolio, 2. Learning Management System, and 3. POS. Each individual project will be separated within their own directories and I have provided a directory map to navigate to each project. 

# Table of Contents
1. Portfolio
2. Learning Management System
3. POS

___
# 1. Portfolio
#### Summary
This is my website portfolio, which utilizes Material UI styling components. The website can be viewed here: https://vutony.com/

#### Directory
Backend: /api/Apps/Portfolio <br />
Frontend /client/src/portfolio

#### Key Technologies
- Angular
- TypeScript
- .NET Core 3.1
- C#
- HTML
- SCSS
- Angular Material
- Bootstrap

#### Encountered Issues
- One major issue I faced with developing this project was deployment. Heroku, a cloud based hosting platform, does not support .NET projects, so I had to learn how to deploy my project to Heroku via Docker and containers.
- I also had to figure out a way to be able to showcase my code base to the public and keep my database and communication credentials secure at the same time. Security played a major influence on how developed and structured this Home project.  

#### Lessons Learned
- Utilizing system environment variables to secure database credentials and other information
- Utilizing Docker and containers to deploy a project
- Utilizing Angular Material for styling and components
___

# 2. Learning Management System
#### Summary 
This is my most current programming project and it is also the most complex project I have created. It is a light-weight learning management system. Users will be able to create an account, login, register courses, view lectures, take tests, and earn points with a certificate each time they complete a course. In addition, role based JWT authorization will be utilized so that Admin roles can delete/edit users and add/edit courses on the system. User roles will only be able to perform bare minimum actions on the system. 

I originally initialized this project on a separate Github repo before I merged it here. If you'd like to view the commits from the beginning, you can view them here: https://github.com/tonyvu1/LMS

The demo can be viewed here: https://vutony.com/lms

#### Directory
Backend: /api/Apps/Lms <br />
Frontend /client/src/lms

#### Key Technologies:
- Angular
- TypeScript
- .NET Core 3.1
- C#
- PostgreSQL
- HTML
- SCSS
- Bootstrap

#### Encountered Issues
- Handling database schema with relationships. It was challenging to design a database schema to account for the various one-to-many and many-to-many relationships that existed. This is where I realized that database design before code implementation is critical.
- Learning how to implement and work with JWTs for authorization. One issue with this was deciding whether to store the JWT in NgRX state, localstorage, or cookies. Each came with their respective tradeoffs.

#### Lessons Learned: 
- Utilizing role based authorization with JWTs
- Utilizing JWT claims for course registrations + database relationships. Each time a user registers for a course, their user ID is automatically associated with that specific course registration's ID. Whenever the user calls “/registrations/getall” HTTP GET method, only their associated courses are returned. (Admins are able to call /registrations/getlist HTTP GET method to see all existing registrations)
- Utilizing data transfer objects (DTOs) for encapsulating data to send from one subsystem to another, i.e. data from http body request to backend
- Utilizing Generics to encapsulate data travelling across application layers
___

# 3. POS
#### Summary 
This is one of my first personal programming projects that was built with an Angular + .NET stack. It is a simple POS system for an ice cream shop. 

I originally initialized this project on a separate Github repo before I merged it here. If you'd like to view the commits from the beginning, you can view them here: https://github.com/tonyvu1/pos

The demo can be viewed here: https://vutony.com/pos

#### Directory
Backend: /api/Apps/Pos <br />
Frontend /client/src/pos

#### Key Technologies:
- Angular
- TypeScript
- .NET Core 3.1
- C#
- PostgreSQL
- HTML
- SCSS
- Bootstrap

#### Encountered Issues
- The biggest hurdle I faced was wrapping my head around asynchronous programming and utilizing Observables and Promises when making a request to the backend. There’s a feature where you can view all of the sales made by navigating to the admin page. It was difficult at first to make sure that the admin page was being updated each time a sale was made. Eventually, after much research and googling, I got the hang of asynchronous calls and I was able to update the admin page each time a new sale was made.

#### Lessons Learned: 
- The overall structure and general practices of .NET Core 3.1 Web api project
- How to make HTTP requests across separate servers utilizing CORS
- Wiring up an external database to the backend
