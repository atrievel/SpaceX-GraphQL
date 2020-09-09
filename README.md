# SpaceX-GraphQL

Angular app used to view data on SpaceX launches, rockets, and other data. Public API data fetched with GraphQL and Apollo

## Technologies used

### UI

Angular 9 with Angular Material and FontAwesome icons

### API

[Public SpaceX GraphQL API](https://api.spacex.land/graphql/). Apollo for Angular used to generate the services

### Docker

Used just for users who want to run the app locally without installing all the npm packages

### Firebase

Used to host the app on a cloud service 

## Running the app
There are a few ways that you can run this app. Here are the options (detailed instructions below):

1. **COMING SOON** [View the built app on Firebase](https://spacex-graphql-viewer.web.app/)
2. Run the app via Docker 🐋
3. Clone the repo and run locally

### Firebase

**COMING SOON**

### Docker

* Clone the repo
* Make sure Docker is installed
* ***Note:*** this will take some time for all the packages to install and Angular to compile everyhting the first time, but it should be much faster after that 
* From the root of the project in a command line, run:
``` bash
    cd ./spacex-graphql
    docker build -t SOME_UNIQUE_NAME .
    docker run -d -p 4201:4200 --rm SOME_UNIQUE_NAME
```
* Navigate to localhost:4201 and the app should be running
* To shut the app down, run: 
```bash 
docker stop SOME_UNIQUE_NAME
```

### Locally

* Clone the repo
* Make sure Node and the Angular CLI are installed
* From the root of the project in a command line, run:
``` bash
    cd ./spacex-graphql/src
    npm i
    ng s -o 
```
